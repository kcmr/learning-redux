import types from './types';

export function addTodo(value) {
  return {
    type: types.ADD_TODO,
    payload: {
      completed: false,
      value,
    },
  };
}
