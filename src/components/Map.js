import React from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { MAPBOX_ACCESS_TOKEN } from "../config";
import LoaderActions from "../store/loader";

const Mapbox = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN,
});

export default function Map(props) {
  const dispatch = useDispatch();

  const coordinates = useSelector((state) => state.user.coordinates);
  const loadingComponent = useSelector((st) => st.loader.component);
  const fingerprint = useSelector((state) => state.user.fingerprint);
  const geoJson = useSelector((st) => st.map.dataPoints);

  const latitude = (coordinates && coordinates.latitude) || 51.5285582;
  const longitude = (coordinates && coordinates.longitude) || -0.2416815;
  const url = () =>
    `https://app.opendemic.org/human/location?fingerprint=${fingerprint}&lat=${latitude}&lng=${longitude}`;

  function hideLoader() {
    if (loadingComponent === "Map") {
      dispatch(LoaderActions.show(false));
    }
  }

  return (
    <MapContainer>
      <MapFrame src={url()} onLoad={hideLoader} />
      {/* <Mapbox
        style={"mapbox://styles/mapbox/streets-v9"}
        center={[longitude, latitude]}
        containerStyle={{
          height: "90vh",
          width: "100vw",
        }}
      >
        <GeoJSONLayer
          data={geoJson}
          circleLayout={{
            visibility: "visible",
          }}
          circlePaint={{
            "circle-color": [
              "interpolate",
              ["linear"],
              ["get", "mag"],
              1,
              "#F3DA83",
              3,
              "#FFC304",
              5,
              "#FF5833",
              7,
              "#C50238",
            ],
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              // when zoom is 0, set each feature's circle radius to the value of its "rating" property
              0,
              ["get", "mag"],
              // when zoom is 10, set each feature's circle radius to four times the value of its "rating" property
              10,
              ["*", 4, ["get", "mag"]],
            ],
          }}
        />
      </Mapbox> */}
    </MapContainer>
  );
}

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #343332;
`;

const MapFrame = styled.iframe`
  border: none;
  height: 100%;
  width: 100%;
`;
