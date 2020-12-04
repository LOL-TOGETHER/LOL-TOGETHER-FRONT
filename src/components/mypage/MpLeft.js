import React from "react";
import "../css/MyPage.css";
import cameraicon from "../../images/camera.png";

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
          <img alt="d" className="profile-img" src={profileUrl} />
          <input
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            className="profile-img"
            onChange={onChangeProfileUrl}
          />
        </div>
        <button type="" className="uploadbtn" onClick={onClickProfileUpload}>
          <img className="uploadbtn-img" src={cameraicon} alt=""></img>
        </button>
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
