import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Statistics from "./Statistics";
import useSurprise from "./hooks/useSurprise";
import SignupForm from "./SignupForm";
import Surprise from "./Surprise";
import styled from "styled-components";
const Modal = styled.div`
  .ui.active.modal {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  .modal-header {
    color: white;
    text-align: center;
  }
  .stats-icon {
    top: 5%;
    left: 5%;
    position: absolute;
    font-size: 3rem;
    color: white;
    &:hover {
      cursor: pointer;
      font-size: 3.2rem;
    }
  }
`;

export default () => {
  const { surprise, surpriseMe, clearSurprise } = useSurprise();
  return (
    <Router>
      <Route path="/" exact>
        <Modal
          className="ui dimmer modals visible active"
          onClick={clearSurprise}
        >
          <Link to="/statistics">
            <i class="chart bar icon stats-icon" />
          </Link>

          <div style={{ padding: "10px" }} className="ui modal visible active">
            {surprise ? (
              <Surprise onClick={(e) => e.stopPropagation()} {...surprise} />
            ) : (
              <SignupForm onSignUp={surpriseMe} />
            )}
          </div>
        </Modal>
      </Route>
      <Route path="/statistics">
        <div style={{ height: "500px" }}>
          <Statistics />
        </div>
      </Route>
    </Router>
  );
};
