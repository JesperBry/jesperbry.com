import React, { useState } from "react";

import "./styles/MenuBtn.scss";

const MenuBtn: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <div
      className={enabled ? "btn-container is-active" : "btn-container"}
      onClick={() => setEnabled(!enabled)}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
    </div>
  );
};

export default MenuBtn;
