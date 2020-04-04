export const API_HOST =
  process.env.REACT_APP_API_HOST || "https://dev.opendemic.org";

export const SYMPTOMS = () => {
  let url = `/human/symptom`;
  return url;
};
