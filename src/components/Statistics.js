import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api/surprisesApi";

import Map from "./map/Map";
import Stats from "./Stats";

export default () => {
  const [statistics, setStatistics] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/statistics");
      const results = await Promise.all(
        Object.keys(data.countryDistribution).map((ctryName) => {
          return axios.get(`http://restcountries.eu/rest/v2/name/${ctryName}`);
        })
      );

      const mrkrs = results.map(({ data: [{ name, latlng }] }) => ({
        name,
        latlng,
        count: data.countryDistribution[name],
      }));

      setMarkers(mrkrs);
      setStatistics(data);
    })();
  }, []);

  if (!statistics) {
    return null;
  }

  return (
    <div
      className="ui container"
      style={{ maxHeight: "80vh", display: "relative", marginTop: "-80px" }}
    >
      <Map markers={markers} />
      <Stats statistics={statistics} />
    </div>
  );
};
