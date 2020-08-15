// Action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Action creators
export function addTodo(value) {
  return {
    type: ADD_TODO,
    payload: {
      completed: false,
      value,
    },
  };
}

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);

    default:
      state;
  }
}
