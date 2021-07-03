import React from "react";
import { useHistory } from "react-router-dom";

import MediaBar from "./MediaBar";
import { sosialMedia } from "./utils/MediaArray";

import "./styles/Header.scss";

const Header: React.FC = () => {
  const history = useHistory();

  const handleClick_H1: VoidFunction = () => {
    history.push("/");
  };

  return (
    <div className="header animated animatedFadeInUp fadeInUp">
      <h1 onClick={() => handleClick_H1()}>Hi, my name is Jesper</h1>
      <MediaBar mediaArr={sosialMedia} />
    </div>
  );
};

export default Header;
