import React from "react";

import MediaBar from "./MediaBar";

import "./styles/Header.scss";

const Header = () => {
  return (
    <div className="header animated animatedFadeInUp fadeInUp">
      <h1>Hi, my name is Jesper</h1>
      <MediaBar />
    </div>
  );
};

export default Header;
