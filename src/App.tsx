import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/Home";
import AboutPage from "./components/pages/About";
import SkillsPage from "./components/pages/Skills";
import ContactPage from "./components/pages/Contact";
import NotFoundPage from "./components/pages/NotFound";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" exact>
          <AboutPage />
          <HomePage />
        </Route>
        <Route path="/skills" exact>
          <SkillsPage />
          <HomePage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
          <HomePage />
        </Route>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
