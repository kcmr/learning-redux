import { createStore } from 'redux';
import { todosReducer } from './todos/reducer.js';

const store = createStore(todosReducer);

export default store;
