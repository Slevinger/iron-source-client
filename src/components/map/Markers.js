import React from "react";
import { Marker } from "react-simple-maps";

const Markers = ({ markers }) => {
  return markers.map(({ name, latlng: [lng, lat], count }) => {
    return (
      <Marker key={name} coordinates={[lat, lng]}>
        <g
          fill="none"
          stroke="#FF5533"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          cy="0"
          cx="0"
        >
          <circle cx="0" cy="0" r="3" />
        </g>
        <text
          textAnchor="middle"
          y={20}
          style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
        >
          {`${name}:${count}`}
        </text>
      </Marker>
    );
  });
};

export default Markers;
