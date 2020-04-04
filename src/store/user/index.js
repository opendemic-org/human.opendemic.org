import * as actions from "./actions";
import * as shims from "./shims";
import { exists } from "../../utils";
import * as api from "../../lib/http/api";
import axios, { handleError } from "../../utils/httpClient";
import { sha256 } from "../../utils/parsers";

export default {
  setCoordinates: (coordinates) => {
    return (dispatch) => {
      dispatch(actions.setCoordinates(coordinates));
    };
  },

  setLocale: (locale) => {
    return (dispatch) => {
      dispatch(actions.setLocale(locale));
    };
  },

  storeFingerPrint: (components) => {
    let fp = JSON.stringify(components);
    return async (dispatch) => {
      fp = await sha256(fp);
      try {
        localStorage.setItem("opendemic.fp", fp);
        dispatch(actions.storeFingerprint(fp));
      } catch (error) {
        dispatch(actions.storeFingerprintFailure());
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
    };
  },
  submitSymptomsPending: () => actions.submitSymptomsPending(),
};
