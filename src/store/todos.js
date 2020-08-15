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
      id: Date.now(),
      value,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: {
      id,
    },
  };
}

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : {
              ...todo,
              completed: !todo.completed,
            },
      );

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      state;
  }
}
