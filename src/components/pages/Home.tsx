import React from "react";

import Navbar from "../Navbar";
import Header from "../Header";

import "../../App.scss";

const Home: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
