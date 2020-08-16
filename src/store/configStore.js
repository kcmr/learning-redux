import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer.js';

export function configStore() {
  return configureStore({
    reducer,
  });
}
