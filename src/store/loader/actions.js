import * as types from "./types";

const VISIBLE = true;

export function hide() {
  return {
    type: types.SET_LOADER_HIDDEN,
    payload: { isVisible: !VISIBLE },
  };
}

export function show(value) {
  return {
    type: types.SET_LOADER_VISIBLE,
    payload: { isVisible: VISIBLE, value },
  };
}
