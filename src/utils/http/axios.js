import axios from "axios";

import { errorFactory } from "../errors";
import { exists } from "../index";

const API_HOST = process.env.REACT_APP_API_HOST || "http://localhost:8000";

export const ReduxAxiosError = errorFactory("ReduxAxiosError");

export const axiosAuthorized = () => {
  const storage = localStorage.getItem("persist:dp.storage");
  const user = JSON.parse(storage).user;
  const loginToken = JSON.parse(user).loginToken;

  let headers = {};
  if (exists(loginToken)) {
    headers = { Authorization: `Bearer ${loginToken.access}` };
  } else {
    console.warn("No login token found. Requests may be unauthorized.");
  }

  return axios.create({
    baseURL: API_HOST,
    headers,
    timeout: 10000,
    withCredentials: false,
    responseType: "json",
    maxRedirects: 0,
  });
};

export function handleError(err, message) {
  if (!exists(message)) {
    message = err.message;
  }

  try {
    throw new ReduxAxiosError(err, message);
  } catch(e) {
    console.error(e);
  }
};

export default axios.create({
  baseURL: API_HOST,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  timeout: 10000,
  withCredentials: false,
  responseType: "json",
  maxRedirects: 0,
});
