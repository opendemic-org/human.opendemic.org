import * as types from "./types.js";

const SUCCESS = true;

export function setCoordinates(coordinates) {
  return { type: types.SET_COORDINATES, payload: coordinates };
}

export function setLocale(locale) {
  return { type: types.SET_LOCALE, payload: locale };
}

export function storeFingerprint(fp) {
  return { type: types.STORE_FINGERPRINT_SUCCESS, payload: fp };
}
export function storeFingerprintFailure() {
  return { type: types.STORE_FINGERPRINT_FAILURE };
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
