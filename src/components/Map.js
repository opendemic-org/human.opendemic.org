import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { MAPBOX_ACCESS_TOKEN } from "../config";

const Mapbox = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN,
});

export default function Map(props) {
  const coordinates = useSelector(state => state.user.coordinates);
  const longitude = coordinates.longitude ||  -0.2416815;
  const latitude = coordinates.latitude ||  51.5285582;
  return (
    <MapContainer>
      {/* <MapFrame src="https://app.opendemic.org/global_map?lat=40.12&lng=-70.12" /> */}
    <Mapbox
      style={"mapbox://styles/mapbox/streets-v9"}
      center={[longitude, latitude]}
      containerStyle={{
        height: '90vh',
        width: '100vw'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[longitude, latitude]} />
      </Layer>
    </Mapbox>
    </MapContainer>
  );
}

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const MapFrame = styled.iframe`
  border: none;
  height: 100%;
  width: 100%;
`;
