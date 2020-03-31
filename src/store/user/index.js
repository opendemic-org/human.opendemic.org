import * as actions from "./actions";
import * as shims from "./shims";
import { exists } from "../../utils";
import * as api from "../../utils/http/api";
import axios, { handleError } from "../../utils/http/axios";
import { sha256 } from "../../utils/parsers";

export default {
  setCoordinates: (coordinates) => {
    return (dispatch) => {
      dispatch(actions.setCoordinates(coordinates));
    };
  },

  storeFingerPrint: (components) => {
    let id = JSON.stringify(components);
    return async (dispatch) => {
      id = await sha256(id);
      try {
        localStorage.setItem("opendemic.id", id);
        dispatch(actions.storeId(id));
      } catch(error) {
        dispatch(actions.storeIdFailure());
      }
    };
  },

  submitSymptoms: (body) => {
    return async (dispatch) => {
      const url = api.SYMPTOMS();
      const data = await axios()
        .post(url)
        .catch(handleError)
        .then((res) => {
          return res && res.data;
        });
      if (!exists(data)) {
        dispatch(actions.submitSymptomsFailure());
      } else {
        dispatch(actions.submitSymptoms());
      }
    }
  },
  submitSymptomsPending: () => actions.submitSymptomsPending(),
};
