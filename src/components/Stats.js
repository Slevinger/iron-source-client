import React from "react";
import round from "lodash/round";

export default ({ statistics }) => {
  return (
    <div className="ui container">
      <div
        className="ui segment"
        style={{
          justifyContent: "center",
          flexDirection: "row",
          display: "flex",
          marginTop: "-80px",
        }}
      >
        <div class="ui small statistic">
          <div class="value">{round(statistics.averageAge)}</div>
          <div class="label">Average Age</div>
        </div>
      </div>
      <div
        className="ui segment"
        style={{
          justifyContent: "center",
          flexDirection: "row",
          display: "flex",
        }}
      >
        {Object.keys(statistics.distribution).map((resultKey) => {
          return (
            <div class="ui tiny statistic">
              <div class="value">{statistics.distribution[resultKey]}</div>
              <div class="label">{resultKey}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
