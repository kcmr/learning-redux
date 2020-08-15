import { LitElement, html } from 'lit-element';
import { configStore } from './store/configStore.js';
import { addTodo, removeTodo, toggleTodo } from './store/todos.js';
import './components/TodosForm.js';
import './components/TodoItem.js';

const store = configStore();

class ReduxApp extends LitElement {
  static get properties() {
    return {
      _todos: {
        type: Array,
      },
    };
  }

  constructor() {
    super();

    this._todos = [];
    store.subscribe(() => (this._todos = store.getState()));
  }

  _handleTodoAdded({ detail: value }) {
    store.dispatch(addTodo({ value }));
  }

  _handleTodoRemoved(id) {
    store.dispatch(removeTodo({ id }));
  }

  _handleCompletedChanged(id) {
    store.dispatch(toggleTodo({ id }));
  }

  render() {
    return html`
      <todos-form @todo-added=${this._handleTodoAdded}></todos-form>

      <ul>
        ${this._todos.map(
          ({ value, completed, id }) => html`
            <li>
              <todo-item
                value=${value}
                ?completed=${completed}
                @removed=${() => this._handleTodoRemoved(id)}
                @completed-changed=${() => this._handleCompletedChanged(id)}
              ></todo-item>
            </li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define('redux-app', ReduxApp);
