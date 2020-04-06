export function getMapData(data) {
  return {
    fingerprint: data.fingerprint,
    lat: data.coordinates.latitude,
    lng: data.coordinates.longitude,
  };
}

export function mapData(data) {
  const out = data.replace(/\bNaN\b/g, "null");
  return JSON.parse(out);
}

export function postSymptoms(data) {
  return {
    fingerprint: data.fingerprint,
    symptoms: {
      fever: data.fever === true ? 1 : 0,
      shortBreath: data.shortBreath === true ? 1 : 0,
      cough: data.cough === true ? 1 : 0,
      confirmedCovid: data.confirmedCovid === true ? 1 : 0,
    },
    location: {
      lat: data.coordinates.latitude,
      lng: data.coordinates.longitude,
    },
  };
}
