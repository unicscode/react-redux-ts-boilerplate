import { Action } from 'redux';

type Handler = any;

/**
 * Function to reduce boilerplate  redux reducers, and avoid the use of traditional switch case
 * statement which disrupts the understanding of what the actions actually do
 * only need to export reducer throught this function with params defined here
 * @param {any} initialState - initial state of reducer
 * @param {object} handlers - Object containig the action type with action to perform on a reducer
 * @returns {object} - returns modified state or default state
 */
function createReducer(initialState = {}, handlers: Handler) {
  // eslint-disable-next-line func-names
  return function (state = initialState, action: Action) {
    const handler = handlers[action.type];
    if (handler) {
      return handler(action, state);
    }
    return state;
  };
}

export default createReducer;
