import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import { MAPBOX_ACCESS_TOKEN } from "../config";

const Mapbox = ReactMapboxGl({
  accessToken: MAPBOX_ACCESS_TOKEN,
});

export default function Map() {
  return (
    <Mapbox
      style={"mapbox://styles/mapbox/streets-v9"}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Mapbox>
  );
}
