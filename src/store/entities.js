import { combineReducers } from 'redux';
import todos from './todos.js';
import goals from './goals.js';

export default combineReducers({
  todos,
  goals,
});
