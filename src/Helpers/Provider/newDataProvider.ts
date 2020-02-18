import { Application, Params as FeathersParams } from '@feathersjs/feathers';
import {
	CREATE,
	DELETE,
	DELETE_MANY,
	GET_LIST,
	GET_MANY,
	GET_MANY_REFERENCE,
	GET_ONE,
	UPDATE,
	UPDATE_MANY,
} from 'Constants';
import { DataProvider, GetOneResult, Record, UpdateParams } from 'ra-core';

const defaultIdKey = 'id';

const idKey = 'id';

const deleteProp = (obj: object, prop: string) => {
	let res: { [ket: string]: any } = Object.assign({}, obj);
	delete res[prop];
	return res;
};

const mapChangeMany = (response: any) => ({
	data: response.map((record: Record) => record[idKey]),
});

const mapRes = (response: GetOneResult) => ({ data: response });

enum Order {
	desc = 'DESC',
	asc = 'ASC',
}

const getOrder = (order: string) => {
	if (order === Order.desc) return -1;
	if (order === Order.asc) return 1;
	return order;
};

export default (app: Application): DataProvider => {
	return {
		[GET_ONE]: (resource, params) =>
			app
				.service(resource)
				.get(params.id)
				.then(mapRes),

		[GET_MANY]: (resource, params) => {
			const ids = params.ids || [];
			const query: FeathersParams = {};

			query[idKey] = { $in: ids };
			query.$limit = ids.length;

			return app.service(resource).find({ query });
		},

		[GET_MANY_REFERENCE]: (resource, params) => {
			const query: FeathersParams = {};
			if (params.target && params.id) {
				query[params.target] = params.id;
			}
			const { page, perPage } = params.pagination || {};
			const { field, order } = params.sort || {};
			if (perPage && page) {
				query.$limit = perPage;
				query.$skip = perPage * (page - 1);
			}
			if (order) {
				query.$sort = {
					[field || idKey]: getOrder(order),
				};
			}
			Object.assign(query, params.filter);
			return app.service(resource).find({ query });
		},

		[UPDATE]: (resource, params: UpdateParams) => {
			const data =
				idKey !== defaultIdKey
					? deleteProp(params.data, defaultIdKey)
					: params.data;

			return app
				.service(resource)
				.update(params.id, data)
				.then(mapRes);
		},

		[UPDATE_MANY]: (resource, params) => {
			const data =
				idKey !== defaultIdKey
					? deleteProp(params.data, defaultIdKey)
					: params.data;

			return Promise.all(
				params.ids.map(id => app.service(resource).update(id, data)),
			).then(mapChangeMany);
		},

		[CREATE]: (resource, params) => {
			return app
				.service(resource)
				.create(params.data)
				.then((response: typeof params.data) => ({
					data: { ...params.data, ...response, id: response[idKey] },
				}));
		},

		[DELETE]: (resource, params) => {
			return app
				.service(resource)
				.remove(params.id)
				.then(mapRes);
		},

		[DELETE_MANY]: (resource, params) => {
			const service = app.service(resource);

			if (service.options.multi) {
				return service.remove(null, {
					query: { [idKey]: { $in: params.ids } },
				});
			}
			return Promise.all(params.ids.map(id => service.remove(id))).then(
				mapChangeMany,
			);
		},

		[GET_LIST]: (resource, params) => {
			const query: FeathersParams = {};
			const { page, perPage } = params.pagination || {};
			const { field, order } = params.sort || {};
			if (perPage && page) {
				query.$limit = perPage;
				query.$skip = perPage * (page - 1);
			}
			if (order) {
				query.$sort = {
					[field || idKey]: getOrder(order),
				};
			}

			Object.assign(query, params.filter);

			return app.service(resource).find({ query });
		},
	};
};
