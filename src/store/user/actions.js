import * as types from "./types.js";

const SUCCESS = true;

export function setCoordinates(coordinates) {
  return { type: types.SET_COORDINATES, payload: coordinates };
}

export function setLocale(locale) {
  return { type: types.SET_LOCALE, payload: locale };
}

export function storeId(id) {
  return { type: types.STORE_ID_SUCCESS, payload: id };
}
export function storeIdFailure() {
  return { type: types.STORE_ID_FAILURE };
}

export function submitSymptoms() {
  return { type: types.SUBMIT_SYMPTOMS_SUCCESS, payload: SUCCESS };
}
export function submitSymptomsFailure() {
  return { type: types.SUBMIT_SYMPTOMS_FAILURE, payload: !SUCCESS };
}
export function submitSymptomsPending() {
  return { type: types.SUBMIT_SYMPTOMS_PENDING };
}
