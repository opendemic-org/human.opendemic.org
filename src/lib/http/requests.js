import * as api from "./api";
import * as shims from "./shims";
import defaultHttpClient, {
  handleError,
  httpClient,
} from "../../utils/httpClient";

export async function getMapData(data) {
  const params = shims.getMapData(data);
  const url = api.MAP_DATA(params);
  return await httpClient({ responseType: "text" })
    .get(url)
    .catch(handleError)
    .then((res) => {
      if (res) {
        if (res.data) {
          return shims.mapData(res.data);
        }
      }
      return null;
    });
}

export async function postSymptoms(data) {
  const url = api.SYMPTOMS();
  const body = shims.postSymptoms(data);
  return await defaultHttpClient
    .post(url, body)
    .catch(handleError)
    .then((res) => {
      return res && res.data;
    });
}
