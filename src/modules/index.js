import {combineReducers} from 'redux';
import counter from './counter';
import funnel from './funnel';
import productStore from './productStore';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  counter,
  funnel,
  productStore
});
