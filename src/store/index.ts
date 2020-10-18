import { combineReducers, createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { countReducer } from './counter/reducer';
import * as History from 'history'; 
import thunk from 'redux-thunk';

// *
// * store 本体
// *

const history = History.createBrowserHistory();

// Reducerを増やすときは、ここに追加
const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: countReducer,
});

const rootRouter = applyMiddleware(
  routerMiddleware(history),
  thunk
)

// states type
export type RootState = ReturnType<typeof rootReducer>; // ReturnType<typeof fn>は、fnの返り値の型

// store
const store = createStore(rootReducer, rootRouter);

export default store;