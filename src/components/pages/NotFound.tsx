import React from "react";

import "./styles/NotFound.scss";

const NotFound: React.FC = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <br />
      <p>
        The page you are looking for doesn't exist or another error occurred.
      </p>
    </div>
  );
};

export default NotFound;
