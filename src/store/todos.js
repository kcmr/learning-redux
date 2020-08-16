import { createSlice } from '@reduxjs/toolkit';
import storage from '../lib/storage';

const slice = createSlice({
  name: 'todos',
  initialState: storage.getItem('todos') || [],
  reducers: {
    addTodo: (todos, action) => {
      todos.push({
        id: Date.now(),
        completed: false,
        ...action.payload,
      });
    },

    toggleTodo: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[index].completed = !todos[index].completed;
    },

    removeTodo: (todos, action) => {
      return todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// Selectors
export const selectUndoneTasks = (state) =>
  state.entities.todos.filter((todo) => todo.completed === false);

export const { addTodo, toggleTodo, removeTodo } = slice.actions;
export default slice.reducer;
