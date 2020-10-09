import { combineReducers } from 'redux';
import todos from './todoIndexReducer';

export default combineReducers({
  todos,
});