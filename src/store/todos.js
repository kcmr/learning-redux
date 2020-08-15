import { createAction, createReducer } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO');
export const toggleTodo = createAction('TOGGLE_TODO');
export const removeTodo = createAction('REMOVE_TODO');

// Reducer
export default createReducer([], {
  [addTodo.type]: (todos, action) => {
    // we can write mutation code here (internally redux tookkit prevents mutation)
    todos.push({
      id: Date.now(),
      completed: false,
      ...action.payload,
    });
  },

  [toggleTodo.type]: (todos, action) => {
    const index = todos.findIndex((todo) => todo.id === action.payload.id);
    todos[index].completed = !todos[index].completed;
  },

  [removeTodo.type]: (todos, action) => {
    return todos.filter((todo) => todo.id !== action.payload.id);
  },
});
