import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import reducers from 'containers/root-reducer';

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();
const middleware = routerMiddleware(history);
export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectRouter(history)(
    combineReducers({
      ...reducers
    })
  ),
  composeEnhance(applyMiddleware(middleware, sagaMiddleware))
);

export default store;
