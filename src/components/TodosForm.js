import { LitElement, html, css } from 'lit-element';

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
          placeholder="Something to do…"
          @change=${this._handleInputChange}
          .value=${this._value}
        />
      </form>
    `;
  }
}

TodosForm.styles = css`
  :host {
    display: block;
  }

  label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    font-family: inherit;
    font-size: 14px;
    font-weight: bold;
    padding: 0 12px;
    width: 100%;
    box-sizing: border-box;
    height: 42px;
    border: 1px solid #d0d0d0;
    border-radius: 2px;
  }

  input:focus {
    border-color: #cf19d2;
    outline: none;
  }

  ::placeholder {
    color: #aaa;
  }
`;

customElements.define('todos-form', TodosForm);
