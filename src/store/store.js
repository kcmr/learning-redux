import { createStore } from 'redux';
import { devToolsEnhancer } from '../lib/devtools.js';
import { todosReducer } from './todos/reducer.js';

const store = createStore(todosReducer, devToolsEnhancer());

export default store;
