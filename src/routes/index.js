import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import MyPage from "../components/pages/MyPage";
import Board from "../components/pages/Board";
import SignUp from "../components/pages/SignUp";
import Login from "../components/pages/Login";
import DetailPage from "../components/pages/DetailPage";
import Write from "../components/pages/Write";
import MyPosts from "../components/pages/MyPosts";
import ReadMyPage from "../components/pages/ReadMyPage";
import ReadOtherPage from "../components/pages/ReadOtherPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Services" exact component={Services} />
      <Route path="/changemypage" exact component={MyPage} />
      <Route path="/board" exact component={Board} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/log-in" exact component={Login} />
      <Route path="/detailpage" component={DetailPage} />
      <Route path="/write" exact component={Write} />
      <Route path="/myposts" exact component={MyPosts} />
      <Route path="/mypage" exact component={ReadMyPage} />
      <Route path="/mypage/partner/" component={ReadOtherPage} />
    </Switch>
  );
};

export default Routes;
