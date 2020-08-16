import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer.js';

export default configureStore({
  reducer,
});
