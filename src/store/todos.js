import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todos',
  initialState: [],
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

export const { addTodo, toggleTodo, removeTodo } = slice.actions;
export default slice.reducer;
