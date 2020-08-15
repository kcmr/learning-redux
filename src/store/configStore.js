import { createStore } from 'redux';
import { devToolsEnhancer } from '../lib/devtools.js';
import todos from './todos.js';

export function configStore() {
  return createStore(todos, devToolsEnhancer());
}
