import * as api from "./api";
import * as shims from "./shims";
import httpClient, { handleError } from "../../utils/httpClient";

export async function postSymptoms(data) {
  const url = api.SYMPTOMS();
  const body = shims.postSymptoms(data);
  return await httpClient
    .post(url, body)
    .catch(handleError)
    .then((res) => {
      return res && res.data;
    });
}
