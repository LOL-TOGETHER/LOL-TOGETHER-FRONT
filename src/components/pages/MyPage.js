import React, { useState } from "react";
import champData from "../../static-data/champ-static-data.json";
import MpLeft from "../mypage/MpLeft";
import MpRight from "../mypage/MpRight";
import axios from "axios";
import Nami from "../../images/lolicon.jpg";
import "../css/MyPage.css";

const MyPage = () => {
  const [profileUrl, setProfileUrl] = useState(Nami);
  const [input, setInput] = useState("");
  const [champ, setChamp] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [username, setUsername] = useState("");
  const [buttonState, setButtonState] = useState("");

  const onClickLine = (e) => {
    setButtonState(e.target.name);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const OnClickButton = (e) => {
    e.preventDefault();
    let champdatainfo;

    for (let i in champData.data) {
      if (champData.data[i].name === input) {
        champdatainfo = champData.data[i].key;
      }
    }
    const nextChamp = champ.concat({
      id: nextId,
      name: input,
      engname: champdatainfo,
    });

    if (nextChamp[3]) {
      nextChamp.pop();
      alert("3개만 쓰시오");
    }

    setNextId(nextId + 1);
    setChamp(nextChamp);
    console.log(champ);
    setInput("");
  };

  const champList = champ.map((champ) => (
    <li key={champ.id}>
      <div>
        <img
          className="iconimg"
          alt=""
          src={`https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/${champ.engname}.png`}
        />
      </div>
      {champ.name}
    </li>
  ));

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeProfileUrl = (e) => {
    setProfileUrl(e.target.files[0]);
  };

  const onClickProfileUpload = (e) => {
    const formData = new FormData();
    formData.append("file", profileUrl);
    // axios.post("ServerURl", formData);
  };

  const onClickSave = () => {
    // axios
    //   .post("ServerUrl", {
    //     champ1: champ[0].engname,
    //     champ2: champ[1].engname,
    //     champ3: champ[2].engname,
    //     line: buttonState,
    //     userName: username,
    //     profileUrl: profileUrl,
    //   })
    //   .then(() => {})
    //   .catch((error) => alert(error));
  };

  return (
    <div className="mp-container">
      <MpLeft
        onChangeUsername={onChangeUsername}
        username={username}
        onClickProfileUpload={onClickProfileUpload}
        profileUrl={profileUrl}
        onClickSave={onClickSave}
        onChangeProfileUrl={onChangeProfileUrl}
      />
      <MpRight
        input={input}
        champ={champ}
        nextId={nextId}
        buttonState={buttonState}
        champList={champList}
        onClickLine={onClickLine}
        handleInput={handleInput}
        OnClickButton={OnClickButton}
      />
    </div>
  );
};

export default MyPage;
