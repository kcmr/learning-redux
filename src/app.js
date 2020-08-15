import store from './store/store.js';
import { addTodo as addTodoAction } from './store/todos/actions.js';

function addTodo(value) {
  store.dispatch(
    addTodoAction({
      value,
    }),
  );
}

store.subscribe(() => {
  const state = store.getState();
  console.log('State', state);
});

// Type `addTodo('something to do')` in the browser console
window.addTodo = addTodo;
