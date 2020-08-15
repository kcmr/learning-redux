import types from './types';

export function addTodo(payload) {
  return {
    type: types.ADD_TODO,
    payload: {
      completed: false,
      ...payload,
    },
  };
}
