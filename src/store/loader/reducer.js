import * as types from "./types.js";

export const initialState = {
  component: null,
  isVisible: false,
  value: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOADER_HIDDEN:
    case types.SET_LOADER_VISIBLE:
      return {
        ...state,
        component: action.payload.component,
        isVisible: action.payload.isVisible,
        value: action.payload.value,
      };
    default:
      return state;
  }
}
