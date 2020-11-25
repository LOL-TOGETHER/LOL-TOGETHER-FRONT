import React from "react";
import MpLeft from "../mypage/MpLeft";
import MpRight from "../mypage/MpRight";

import "../css/MyPage.css";

const MyPage = () => {
  return (
    <div className="mp-container">
      <MpLeft />
      <MpRight />
    </div>
  );
};

export default MyPage;
