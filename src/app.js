import { LitElement, html } from 'lit-element';
import { configStore } from './store/configStore.js';
import './components/StoreProvider.js';
import './components/TodosForm.js';

class ReduxApp extends LitElement {
  render() {
    return html`
      <store-provider .value=${configStore()}>
        <todos-form></todos-form>
      </store-provider>
    `;
  }
}

customElements.define('redux-app', ReduxApp);
