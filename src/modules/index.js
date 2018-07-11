import {combineReducers} from 'redux';
import counter from './counter';
import products from './products';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  counter,
  products
});
