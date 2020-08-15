import * as reduxDevtools from 'redux-devtools-extension';

// Workaround to import devToolsEnhancer (snowpack does not find the module)
export const { devToolsEnhancer } = reduxDevtools.default;
