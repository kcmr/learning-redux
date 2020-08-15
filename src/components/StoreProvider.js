import { createContext } from 'haunted';

export const StoreContext = createContext('store');

customElements.define('store-provider', StoreContext.Provider);
