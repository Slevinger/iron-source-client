import React from "react";
import styled from "styled-components";

export default ({ url, value, type, onClick }) => {
  const imageSize =
    type === "trumpQuote"
      ? "large"
      : type === "chuckNorris"
      ? "small"
      : "medium";
  return (
    <div onClick={onClick} style={{ backgroundColor: "transparent" }}>
      <h1 className="modal-header">SURPRISE!!!</h1>
      <img className={`ui centered ${imageSize} image`} src={url} />
      {value && (
        <div className="ui large segment">
          <h3>{value}</h3>
        </div>
      )}
    </div>
  );
};
