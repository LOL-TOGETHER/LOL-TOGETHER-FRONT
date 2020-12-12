import React from "react";
import "../css/MyPage.css";
import cameraicon from "../../images/camera.png";
import { Link } from "react-router-dom";

const MpLeft = ({
  username,
  userinput,
  onChangeUsername,
  profileUrl,
  onChangeProfileUrl,
  onClickSave,
  onClickProfileUpload,
}) => {
  return (
    <div className="mp-container-left">
      <div className="mp-profile">
        <h1>프로필사진</h1>
        <div className="box-profile">
          <img alt="default" className="profile-img" src={profileUrl} />
        </div>
        <div>
          <label className="file-input-label">
            <img src={cameraicon} alt="" className="uploadbtn" />
            <input
              className="file-input"
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              onChange={onChangeProfileUrl}
              src={cameraicon}
            />
          </label>
        </div>
      </div>

      <div className="myleft-nickname-container">
        <h1>{username}</h1>
        <input
          value={username}
          onChange={onChangeUsername}
          className="mp-left-input"
          placeholder="롤 닉네임 입력"
        />
      </div>
      <div className="savechangebtn-container">
        <label>
          <button className="myleft-button" onClick={onClickSave}>
            변경 내용 저장
          </button>
        </label>
      </div>
    </div>
  );
};

export default MpLeft;
