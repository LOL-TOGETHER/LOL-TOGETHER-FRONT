import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Board from "./components/pages/Board";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/board" exact component={Board} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/log-in" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
