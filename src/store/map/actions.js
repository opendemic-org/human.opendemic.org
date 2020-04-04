import * as types from "./types.js";

export function getDataPoints(geoJson) {
  return { type: types.GET_DATA_POINTS_SUCCESS, payload: geoJson };
}
export function getDataPointsFailure() {
  return { type: types.GET_DATA_POINTS_FAILURE };
}
export function getDataPointsPending() {
  return { type: types.GET_DATA_POINTS_PENDING };
}
