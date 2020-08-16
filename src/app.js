import { LitElement, html } from 'lit-element';
import { configStore } from './store/configStore.js';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  selectUndoneTasks,
} from './store/todos.js';
import './components/TodosForm.js';
import './components/TodoList.js';
import './components/FilterBy.js';

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

    store.subscribe(() => {
      this._todos = this._getState('todos');
    });
  }

  _getState(name) {
    const { entities } = store.getState();
    return entities[name];
  }

  _handleTodoAdded({ detail: value }) {
    store.dispatch(addTodo({ value }));
  }

  _handleTodoRemoved({ detail }) {
    store.dispatch(removeTodo({ id: detail.id }));
  }

  _handleTodoChanged({ detail }) {
    store.dispatch(toggleTodo({ id: detail.id }));
  }

  _handleFilterChanged({ detail: checked }) {
    this._todos = checked
      ? selectUndoneTasks(store.getState())
      : this._getState('todos');
  }

  render() {
    return html`
      <todos-form @todo-added=${this._handleTodoAdded}></todos-form>
      <filter-by
        value="Undone"
        @changed=${this._handleFilterChanged}
      ></filter-by>
      <todo-list
        .items=${this._todos}
        @item-removed=${this._handleTodoRemoved}
        @item-changed=${this._handleTodoChanged}
      ></todo-list>
    `;
  }
}

customElements.define('redux-app', ReduxApp);
