import { LitElement, html, css } from 'lit-element';
import './TodoItem.js';

function fireEvent(type, item) {
  return function () {
    this.dispatchEvent(new CustomEvent(type, { detail: item }));
  };
}

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

  render() {
    return html`
      <ul>
        ${this.items.map(
          (todo) => html`
            <li>
              <todo-item
                value=${todo.value}
                ?completed=${todo.completed}
                @removed=${fireEvent('item-removed', todo)}
                @completed-changed=${fireEvent('item-changed', todo)}
              ></todo-item>
            </li>
          `,
        )}
      </ul>
    `;
  }
}

TodoList.styles = css`
  :host {
    display: block;
  }

  ul {
    magin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    border-bottom: 1px solid #e1e1e1;
    padding: 10px 0;
  }
`;

customElements.define('todo-list', TodoList);
