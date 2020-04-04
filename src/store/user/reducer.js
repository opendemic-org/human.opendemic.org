import * as types from "./types.js";

export const initialState = {
  coordinates: null,
  locale: navigator.language.split("-")[0],
  fingerprint: null,
  fingerprintSuccess: null,
  submitSymptomsPending: false,
  submitSymptomsSuccess: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };

    case types.SET_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };

    case types.STORE_FINGERPRINT_FAILURE:
      return {
        ...state,
        fingerprintSuccess: false,
      };
    case types.STORE_FINGERPRINT_SUCCESS:
      return {
        ...state,
        fingerprint: action.payload,
        fingerprintSuccess: true,
      };

    default:
      return state;
  }
}
