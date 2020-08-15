import { LitElement, html } from 'lit-element';

class TodosForm extends LitElement {
  static get properties() {
    return {
      _value: {
        type: String,
        attribute: false,
      },
    };
  }

  constructor() {
    super();
    this._value = '';
  }

  _handleFormSubmit(event) {
    event.preventDefault();

    this.dispatchEvent(
      new CustomEvent('todo-added', {
        detail: this._value,
      }),
    );

    this._value = '';
  }

  _handleInputChange(event) {
    this._value = event.target.value;
  }

  render() {
    return html`
      <form @submit=${this._handleFormSubmit} autocomplete="off">
        <label for="todo">What needs to be done?</label>
        <input
          type="text"
          id="todo"
          @change=${this._handleInputChange}
          .value=${this._value}
        />
        <button>Add Todo</button>
      </form>
    `;
  }
}

customElements.define('todos-form', TodosForm);
