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
      abPain: data.abPain === true ? 1 : 0,
      anosmia: data.anosmia === true ? 1 : 0,
      diarrhea: data.diarrhea === true ? 1 : 0,
      fatigue: data.fatigue === true ? 1 : 0,
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
