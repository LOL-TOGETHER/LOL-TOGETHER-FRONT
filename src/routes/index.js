import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import MyPage from "../components/pages/MyPage";
import Board from "../components/pages/Board";
import SignUp from "../components/pages/SignUp";
import Login from "../components/pages/Login";
import DetailPage from "../components/pages/DetailPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Services" exact component={Services} />
      <Route path="/mypage" exact component={MyPage} />
      <Route path="/board" exact component={Board} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/log-in" exact component={Login} />
      <Route path="/detailpage" exact component={DetailPage} />
    </Switch>
  );
};

export default Routes;
