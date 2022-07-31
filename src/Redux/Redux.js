import React from "react";

import { createStore, createStoreHook } from "react-redux";

const iniState = {
  counter: 0,
  limit: false,
};

export const ActionType = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

const Reducer = (state, action) => {
  if (action.type === ActionType.INCREMENT) {
    return { ...state, counter: state.counter + action.amount };
    // inc
  } else if (action.type === ActionType.DECREMENT) {
    return { ...state, counter: state.counter - action.amount };
    // dec
  } else if (action === ActionType.RESET) {
    // inc
    return { ...state, counter: 0 };
  } else {
    return state;
  }
};
export const store = createStoreHook(iniState, Reducer);

// IniState is the input of store
//  when reducer is called it return update to reducer
