import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO');
export const toggleTodo = createAction('TOGGLE_TODO');
export const removeTodo = createAction('REMOVE_TODO');

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case addTodo.type:
      return state.concat({
        id: Date.now(),
        completed: false,
        ...action.payload,
      });

    case toggleTodo.type:
      return state.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : {
              ...todo,
              completed: !todo.completed,
            },
      );

    case removeTodo.type:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      state;
  }
}
