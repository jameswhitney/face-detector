import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import logo from "./logo.png";

const Logo = () => (
  <div className="ma4 mt0">
    <Tilt
      className="Tilt br2 shadow-2"
      options={{ max: 55 }}
      style={{ height: 125, width: 125 }}
    >
      <div className="Tilt-inner">
        <img alt="logo" src={logo} />
      </div>
    </Tilt>
  </div>
);

export default Logo;
