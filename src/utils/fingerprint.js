import Fingerprint2 from "fingerprintjs2";

export default function() {
  return new Promise(function (resolve, reject) {
    if (window.requestIdleCallback) {
      requestIdleCallback(function () {
        try {
          Fingerprint2.get(resolve);
        } catch (error) {
          reject(error);
        }
      });
    } else {
      setTimeout(function () {
        try {
          Fingerprint2.get(resolve);
        } catch (error) {
          reject(error);
        }
      }, 500);
    }
  });
};
