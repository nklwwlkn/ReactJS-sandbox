import React from "react";
import { Link } from "react-router-dom";

import GoogleApi from "./GoogleApi";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All streams
        </Link>
        <GoogleApi />
      </div>
    </div>
  );
};

export default Header;
