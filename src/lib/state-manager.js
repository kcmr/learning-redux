// This is our mini Redux "clone" for learning purposes.
export function createStore(reducer) {
  let state;
  const listeners = [];

  const getState = () => state;

  const subscribe = (callback) => {
    listeners.push(callback);
    // here we could return an unsubscribe method that will remove the
    // callback passed as param from the listeners array

    // Example: const stateChangeHandler = store.subscribe(renderApp)
    // Later… stateChangeHandler.unsubscribe()
  };

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}
