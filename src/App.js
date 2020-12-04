import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import axios from "axios";
import Routes from "./routes/index";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //해야할 것:
  //토큰 받아서 토큰유무에따라 isloggedin true or false
  //isloggedin의 true/false 유무에 따라 navbar 요소 바꾸기

  useEffect(() => {
    axios.get("serverurl").then(() => {});
  });

  return (
    <>
      <Navbar />

      <Routes />
    </>
  );
}

export default App;
