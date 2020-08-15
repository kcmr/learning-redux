import { LitElement, html } from 'lit-element';
import './TodoItem.js';

class TodoList extends LitElement {
  static get properties() {
    return {
      items: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  _handleTodoRemoved(todo) {
    this.dispatchEvent(
      new CustomEvent('item-removed', {
        detail: todo,
      }),
    );
  }

  _handleCompletedChanged(todo) {
    this.dispatchEvent(
      new CustomEvent('item-changed', {
        detail: todo,
      }),
    );
  }

  render() {
    return html`
      <ul>
        ${this.items.map(
          (todo) => html`
            <li>
              <todo-item
                value=${todo.value}
                ?completed=${todo.completed}
                @removed=${() => this._handleTodoRemoved(todo)}
                @completed-changed=${() => this._handleCompletedChanged(todo)}
              ></todo-item>
            </li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define('todo-list', TodoList);
