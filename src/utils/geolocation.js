import { IP_STACK_ACCESS_KEY } from "../config";
import axios, { handleError } from "./httpClient";

const geolocationSettings = {
  enableHighAccuracy: false,
  maximumAge: 30000,
  timeout: 20000,
};

export async function getCurrentPosition(options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export async function getPositionByIp() {
  const url = `http://api.ipstack.com/check?access_key=${IP_STACK_ACCESS_KEY}`;
  const data = await axios
    .get(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return null;
    })
    .catch(handleError);
  if (data) {
    const { latitude, longitude } = data;
    return { latitude, longitude };
  } else {
    return null;
  }
}

export function requestGeolocation(handleSuccess, handleFailure) {
  if (navigator) {
    navigator.permissions
      .query({
        name: "geolocation",
      })
      .then((result) => {
        handleResult(result, handleSuccess, handleFailure);
        result.onchange = () => {
          handleResult(result, handleSuccess, handleFailure);
        };
      });
  } else {
    throw Error("Navigator is not available");
  }
}

function handleResult(result, handleSuccess, handleFailure) {
  if (result.state === "granted") {
    handleSuccess(null, result.state);
  } else if (result.state === "prompt") {
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleFailure,
      geolocationSettings
    );
  } else if (result.state === "denied") {
    handleFailure(result.state);
  }
}
