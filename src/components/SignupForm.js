import React, { useState, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import DatePicker from "react-date-picker";

const StyledDatePicker = styled(DatePicker)`
  .react-date-picker__wrapper {
    border: none;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .react-date-picker__inputGroup__divider {
    line-height: 3rem;
  }
`;

const Error = (props) => {
  const { error } = props;
  if (error) {
    return (
      <div className="ui negative message">
        <div className="header">{error}</div>
      </div>
    );
  }
  return null;
};

export default ({ onSignUp }) => {
  const [name, setName] = useState("");
  const [countryNameInput, setCountryNameInput] = useState("");
  const [country, setCountry] = useState(name);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState("");
  const setLocation = useCallback(
    async (event) => {
      try {
        setError("");
        const {
          data: [result],
        } = await axios.get(
          `https://restcountries.eu/rest/v2/name/${countryNameInput}`
        );
        console.log(result);
        setCountry(result.name);
      } catch (error) {
        event.stopPropagation();
        setError("Country name is invalid");
      }
    },
    [countryNameInput, setError]
  );
  return (
    <>
      <div className="header">Get Surprised</div>
      <div className="content">
        <div className="ui container">
          <div className="ui form">
            <div class="field">
              <label>Enter Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                name="first-name"
                placeholder="Name"
              />
            </div>
            <div class="field">
              <label>Enter Date Of Birth</label>
              <StyledDatePicker value={dateOfBirth} onChange={setDateOfBirth} />
            </div>
            <div class="field">
              <label>Enter Country</label>
              <input
                onBlur={(event) => {
                  console.log("blue");
                  setLocation(event);
                }}
                type="text"
                value={country || countryNameInput}
                onChange={(event) =>
                  setCountryNameInput(event.currentTarget.value)
                }
                name="country"
                placeholder="Country"
              />
              <Error error={error} />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        {country && name && dateOfBirth && (
          <button
            className="ui button primary"
            onClick={() => {
              onSignUp({
                name,
                country,
                dateOfBirth,
              });
            }}
          >
            Ok
          </button>
        )}
      </div>
    </>
  );
};
