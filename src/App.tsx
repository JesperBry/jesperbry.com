import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
      </div>
    </Router>
  );
}

export default App;