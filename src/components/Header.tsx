import React from "react";

import MediaBar from "./MediaBar";
import { sosialMedia } from "./utils/MediaArray";

import "./styles/Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header animated animatedFadeInUp fadeInUp">
      <h1>Hi, my name is Jesper</h1>
      <MediaBar mediaArr={sosialMedia} />
    </div>
  );
};

export default Header;
