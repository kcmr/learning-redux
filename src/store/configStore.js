import { configureStore } from '@reduxjs/toolkit';
import todos from './todos.js';

export function configStore() {
  return configureStore({
    reducer: todos,
  });
}
