import * as types from "./types.js";

export const initialState = {
  isVisible: false,
  message: "",
  options: {
    allowClickAway: true,
    cancelText: null,
    confirmText: "Ok",
    error: false,
    icon: null,
    intent: null,
    onClose: console.log,
    onConfirm: console.log,
    style: null,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_MODAL_HIDDEN:
    case types.SET_MODAL_VISIBLE:
      return {
        ...state,
        isVisible: action.payload.isVisible,
        message: action.payload.message,
        options: {
          ...initialState.options,
          ...action.payload.options
        },
      };
    default:
      return state;
  }
};
