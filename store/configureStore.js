import { createStore, applyMiddleware, combineReducers } from 'redux';

// redux-logger for logging and debugging redux in dev-mode
// !!! MAY CAUSE PERFORMANCE PROBLEMS !!!
import logger from 'redux-logger';

import { settings } from "../redux/settingsRedux";
import { dailyStats } from "../redux/dailyStatsRedux"

const middleware = [];
// Use the NODE_ENV to include logging and debugging tools
// in development environment. They will be compiled out of
// the production build. 
// https://github.com/gabergg/ReactNativeTodoList
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const reducer = combineReducers({
  settings,
  dailyStats
});

// Can use a preloaded initialState if available, in this case we don't
export default (initialState) => {
  // http://redux.js.org/docs/api/createStore.html
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
  )
  return store
}