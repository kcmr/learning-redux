import { LitElement, html, css } from 'lit-element';

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
        <button @click=${this._handleButtonClick} aria-label="Remove"></button>
      </label>
    `;
  }
}

TodoItem.styles = css`
  :host {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #616161;
  }

  label {
    display: flex;
    align-items: center;
  }

  input {
    width: 24px;
    height: 24px;
    border: 1px solid #d0d0d0;
    margin-right: 12px;
    flex: none;
  }

  span {
    flex: 1;
  }

  button {
    flex: none;
    width: 18px;
    height: 18px;
    line-height: 1;
    border-radius: 50%;
    background-color: #c4c4c4;
    border: none;
    outline: none;
    color: #fff;
    font-family: inherit;
    cursor: pointer;
    position: relative;
  }

  button::after {
    content: '×';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
  }
`;

customElements.define('todo-item', TodoItem);
