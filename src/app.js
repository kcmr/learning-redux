import { configStore } from './store/configStore.js';
import { addTodo, toggleTodo, removeTodo } from './store/todos.js';

const store = configStore();

store.subscribe(() => {
  console.log('State', store.getState());
});

// For testing without UI
window.toggleTodo = (id) => store.dispatch(toggleTodo({ id }));
window.removeTodo = (id) => store.dispatch(removeTodo({ id }));

const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const { value } = this.elements.todo;
  store.dispatch(addTodo({ value }));

  this.elements.todo.value = '';
}
