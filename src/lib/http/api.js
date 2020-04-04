import { exists } from "../../utils";

export const API_HOST =
  process.env.REACT_APP_API_HOST || "https://dev.opendemic.org";

export const MAP_DATA = (params) => {
  let url = `/human/location?`;
  if (exists(params.fingerprint)) {
    url += `&fingerprint=${params.fingerprint}`;
  }
  if (exists(params.lat)) {
    url += `&lat=${params.lat}`;
  }
  if (exists(params.lng)) {
    url += `&lng=${params.lng}`;
  }
  return url;
};

export const SYMPTOMS = () => {
  let url = `/human/symptom?`;
  return url;
};
