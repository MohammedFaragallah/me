import { connectRouter, routerMiddleware } from 'connected-react-router';
import { DEVELOPMENT } from 'Constants';
import { history } from 'Helpers';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as Reducers from 'Store/Reducers';

const reducers = combineReducers({
	router: connectRouter(history),
	...Reducers,
});

const composeEnhancers =
	(process.env.NODE_ENV === DEVELOPMENT &&
		typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			trace: true,
			traceLimit: 25,
		})) ||
	compose;

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
);

export * from 'Store/Actions';
export * from 'Store/types';
