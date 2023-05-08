import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div className="header">
        <div className="logo">
          <div className="square">
            <h1>HIPAA</h1>
          </div>
        </div>
        <div className="field">
          <div className="search">
            <div className="input-container">
              <input type="text" className="finds" />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
          </div>
          <div>
            <button className="button">
              <Link to="/HomeafterLogin">Home</Link>{" "}
            </button>
            <button className="button">About us</button>
          </div>
        </div>
        <div className="loginbutton">
          <button className="loginbuttoncss">
            {" "}
            <Link to="/Loginform"> Signup/Login</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
