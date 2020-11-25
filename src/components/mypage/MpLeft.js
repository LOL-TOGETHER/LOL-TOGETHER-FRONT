import React from "react";
import "../css/MyPage.css";

const MpLeft = () => {
  return (
    <div className="mp-container-left">
      <div className="mp-profile">
        <h1>프로필사진</h1>
        <div className="box-profile">
          <img className="profile_img" src="" alt="cat" />
        </div>
      </div>
      <div>
        <h1>닉네임</h1>
      </div>
    </div>
  );
};

export default MpLeft;
