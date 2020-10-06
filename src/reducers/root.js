import { combineReducers } from 'redux';
import filterReducer from './filter';
import itemReducer from './items';

const rootReducer = combineReducers({
  items: itemReducer,
  category: filterReducer,
});

export default rootReducer;
