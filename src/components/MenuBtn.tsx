import React from "react";

import "./styles/MenuBtn.scss";

type Props = {
  enabled: boolean;
};

const MenuBtn: React.FC<Props> = (props) => {
  return (
    <div
      className={props.enabled ? "btn-container is-active" : "btn-container"}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
    </div>
  );
};

export default MenuBtn;
