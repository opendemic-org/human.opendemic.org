import * as types from "./types";

const VISIBLE = true;

export function hide() {
  return {
    type: types.SET_MODAL_HIDDEN,
    payload: { isVisible: !VISIBLE },
  };
}

export function show(message, options) {
  return {
    type: types.SET_MODAL_VISIBLE,
    payload: { isVisible: VISIBLE, message, options },
  };
}
