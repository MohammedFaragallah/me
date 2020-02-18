import { connectRouter, routerMiddleware } from 'connected-react-router';
import { DEVELOPMENT } from 'Constants';
import { dataProvider, history } from 'Helpers';
import { adminReducer, adminSaga } from 'react-admin';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import thunk from 'redux-thunk';
import { localeReducer, uiReducer } from 'Store/Reducers';
import { StoreState } from 'Store/types';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['admin', 'router'],
};

const reducers = combineReducers<StoreState>({
	admin: adminReducer,
	router: connectRouter(history),
	locale: localeReducer,
	ui: uiReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const saga = function* rootSaga() {
	yield all([adminSaga(dataProvider)].map(fork));
};

const sagaMiddleware = createSagaMiddleware();

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const { NODE_ENV } = process.env;

const composeEnhancers =
	(NODE_ENV === DEVELOPMENT &&
		typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			trace: true,
			traceLimit: 25,
		} as any)) ||
	compose;

const store = createStore(
	persistedReducer,
	composeEnhancers(
		applyMiddleware(sagaMiddleware, routerMiddleware(history), thunk),
	),
);

sagaMiddleware.run(saga);

const persistor = persistStore(store);

export * from 'Store/Reducers';
export * from 'Store/types';
export { store, persistor };
