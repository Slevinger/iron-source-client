import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";
import Markers from "./Markers";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default ({ markers }) => {
  return (
    <ComposableMap
      style={{ maxHeight: "800px", position: "relative" }}
      projectionConfig={{ scale: 147 }}
    >
      <Graticule stroke="#F53" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      <Markers markers={markers} />
    </ComposableMap>
  );
};
