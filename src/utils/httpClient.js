import axios from "axios";

import { errorFactory } from "./errorFactory";
import { exists } from "./index";
import { API_HOST } from "../lib/http/api";

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
  } catch (e) {
    console.error(e);
  }
}

const defaultOptions = {
  baseURL: API_HOST,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  timeout: 10000,
  withCredentials: false,
  responseType: "json",
  maxRedirects: 0,
};

export function httpClient(options) {
  return axios.create({
    ...defaultOptions,
    ...options,
  });
}

export default axios.create(defaultOptions);
