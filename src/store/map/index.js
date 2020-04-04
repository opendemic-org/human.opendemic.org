import * as actions from "./actions";
import * as requests from "../../lib/http/requests";
import { exists } from "../../utils";

export default {
  getDataPoints: (params) => {
    return async (dispatch) => {
      const data = await requests.getMapData(params);
      if (!exists(data)) {
        dispatch(actions.getDataPointsFailure());
      } else {
        dispatch(actions.getDataPoints(data));
      }
    };
  },
  getDataPointsPending: () => actions.getDataPointsPending(),
};
