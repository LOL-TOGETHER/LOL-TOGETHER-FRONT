import React from "react";
import "../css/MyPage.css";
import Nami from "../../images/lolicon.jpg";

const MpLeft = ({ onClickSave }) => {
  return (
    <div className="mp-container-left">
      <div className="mp-profile">
        <h1>프로필사진</h1>
        <div className="box-profile">
          <img className="profile-img" src={Nami} alt="cat" />
        </div>
      </div>

      <div className="myleft-nickname-container">
        <h1>닉네임</h1>
      </div>
      <div className="savechangebtn-container">
        <button className="myleft-button" onClick={onClickSave}>
          변경 내용 저장
        </button>
      </div>
    </div>
  );
};

export default MpLeft;
