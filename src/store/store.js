import { createStore } from '../lib/state-manager.js';
import { todosReducer } from './todos/reducer.js';

const store = createStore(todosReducer);

export default store;
