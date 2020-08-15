import { createStore } from 'redux';
import { devToolsEnhancer } from '../lib/devtools.js';
import todos from './todos.js';

const store = createStore(todos, devToolsEnhancer());

export default store;
