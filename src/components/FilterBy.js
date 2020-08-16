import { LitElement, html } from 'lit-element';

class FilterBy extends LitElement {
  static get properties() {
    return {
      checked: { type: Boolean },
      value: { type: String },
    };
  }

  _handleCheckboxChange() {
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent('changed', {
        detail: this.checked,
      }),
    );
  }

  render() {
    return html`
      <label>
        <input
          type="checkbox"
          .checked=${this.checked}
          @change=${this._handleCheckboxChange}
        />
        <span>Filter by ${this.value}</span>
      </label>
    `;
  }
}

customElements.define('filter-by', FilterBy);
