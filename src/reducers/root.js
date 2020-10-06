import { combineReducers } from 'redux';
import filterReducer from './filter';

const rootReducer = combineReducers({
  category: filterReducer,
});

export default rootReducer;
