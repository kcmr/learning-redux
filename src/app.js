import { LitElement, html } from 'lit-element';
import { configStore } from './store/configStore.js';
import './components/TodosForm.js';
import { addTodo } from './store/todos.js';

const store = configStore();

class ReduxApp extends LitElement {
  _handleTodoAdded({ detail: value }) {
    store.dispatch(addTodo({ value }));
  }

  render() {
    return html`
      <todos-form @todo-added=${this._handleTodoAdded}></todos-form>
    `;
  }
}

customElements.define('redux-app', ReduxApp);
