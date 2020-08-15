import { LitElement, html } from 'lit-element';

class TodoItem extends LitElement {
  static get properties() {
    return {
      value: {
        type: String,
      },
      completed: {
        type: Boolean,
      },
    };
  }

  _handleCheckboxChange() {
    this.completed = !this.completed;
    this.dispatchEvent(new Event('completed-changed'));
  }

  _handleButtonClick() {
    this.dispatchEvent(new Event('removed'));
  }

  render() {
    return html`
      <label>
        <input
          type="checkbox"
          @change=${this._handleCheckboxChange}
          .checked=${this.completed}
        />
        <span>${this.value}</span>
        <button @click=${this._handleButtonClick}>Remove</button>
      </label>
    `;
  }
}

customElements.define('todo-item', TodoItem);
