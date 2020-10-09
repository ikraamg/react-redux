import { combineReducers } from 'redux';
import filterReducer from './filter';
import itemReducer from './items';
import entryReducer from './entry';

const rootReducer = combineReducers({
  items: itemReducer,
  category: filterReducer,
  entries: entryReducer,

});

export default rootReducer;
