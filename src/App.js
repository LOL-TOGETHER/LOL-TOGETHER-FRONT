import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Routes from "./routes/index";

function App() {
  //해야할 것:
  //토큰 받아서 토큰유무에따라 isloggedin true or false
  //isloggedin의 true/false 유무에 따라 navbar 요소 바꾸기
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default App;
