import types from './types.js';

export function todosReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return state.concat(action.payload);

    default:
      state;
  }
}
