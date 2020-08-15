import { createSlice } from '@reduxjs/toolkit';

const addTodo = (todos, action) => {
  todos.push({
    id: Date.now(),
    completed: false,
    ...action.payload,
  });
};

const toggleTodo = (todos, action) => {
  const index = todos.findIndex((todo) => todo.id === action.payload.id);
  todos[index].completed = !todos[index].completed;
};

const removeTodo = (todos, action) => {
  return todos.filter((todo) => todo.id !== action.payload.id);
};

const slice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo,
    toggleTodo,
    removeTodo,
  },
});

export const { addTodo, toggleTodo, removeTodo } = slice.actions;
export default slice.reducer;
