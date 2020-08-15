import store from './store/store.js';
import { addTodo } from './store/todos/actions.js';

store.subscribe(() => {
  console.log('State', store.getState());
});

const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const { value } = this.elements.todo;
  store.dispatch(addTodo(value));

  this.elements.todo.value = '';
}
