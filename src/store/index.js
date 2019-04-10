import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
// 中间件，作用：如果不使用该中间件，当我们dispatch一个action时，需要给dispatch函数传入action对象；但如果我们使用了这个中间件，那么就可以传入一个函数，这个函数接收两个参数:dispatch和getState。这个dispatch可以在将来的异步请求完成后使用，对于异步action很有用
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import globalConfig from '../config';
import Sidebar from './Sidebar.js';
import Login from './Login.js';
import User from './User.js';


/* 这个文件用于生成store */

// 设置各种中间件
const logger = createLogger();
let middleware;
if (globalConfig.debug) {
  middleware = applyMiddleware(logger,thunk);
} else {
  middleware = applyMiddleware(thunk);
}

// 设置redux dev tools
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify here name, actionsBlacklist, actionsCreators and other options
    }) : compose;
const enhancer = composeEnhancers(
  middleware,
  // other store enhancers if any
);


// 整体的初始状态
// 就是把每个组件自己的初始状态组合起来, 注意key的名字和组件名一致
const initState = {
//   Sidebar: Sidebar.initState,
  Login: Login.initState,
  User: User.initState,
};


// 定义reducer
// 每个组件自己的reducer负责维护自己的状态, 注意key的名字和组件名一致
const reducers = {
//   Sidebar: Sidebar.reducer,
  Login: Login.reducer,
  User: User.reducer,
};


// 组合最终的store
const store = createStore(combineReducers(reducers), initState, middleware);

export default store;