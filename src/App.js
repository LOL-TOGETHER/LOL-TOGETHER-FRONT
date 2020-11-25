import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Routes from "./routes/index";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Services from "./components/pages/Services";
// import MyPage from "./components/pages/MyPage";
// import Board from "./components/pages/Board";
// import SignUp from "./components/pages/SignUp";
// import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes />
    </>
  );
}

export default App;
