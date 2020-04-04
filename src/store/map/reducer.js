import * as types from "./types.js";

export const initialState = {
  dataPoints: null,
  dataPointsPending: false,
  dataPointsSuccess: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA_POINTS_FAILURE:
      return {
        ...state,
        dataPointsPending: false,
        dataPointsSuccess: false,
      };
    case types.GET_DATA_POINTS_PENDING:
      return {
        ...state,
        dataPointsPending: true,
        dataPointsSuccess: null,
      };
    case types.GET_DATA_POINTS_SUCCESS:
      return {
        ...state,
        dataPoints: action.payload,
        dataPointsPending: false,
        dataPointsSuccess: true,
      };

    default:
      return state;
  }
}
