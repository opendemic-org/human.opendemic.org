import * as types from "./types.js";

export const initialState = {
  coordinates: null,
  id: null,
  idSuccess: null,
  submitSymptomsPending: false,
  submitSymptomsSuccess: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      }

    default:
      return state;
  }
}
