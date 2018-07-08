import {applyMiddleware, compose, createStore} from 'redux';

import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

export const history = createHistory();

var
  composedEnhancers,
  enhancers = [],
  initialState = {},
  middleware = [
    routerMiddleware(history),
    thunk
  ],
  // process,
  store;

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
//
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
