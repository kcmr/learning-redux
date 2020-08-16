import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'goals',
  initialState: [],
  reducers: {
    addGoal: (goals, action) => {
      goals.push({
        id: Date.now(),
        ...action.payload,
      });
    },

    removeGoal: (goals, action) => {
      return goals.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addGoal, removeGoal } = slice.actions;
export default slice.reducer;
