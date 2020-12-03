import React, { useState } from "react";
import champData from "../../static-data/champ-static-data.json";
import MpLeft from "../mypage/MpLeft";
import MpRight from "../mypage/MpRight";
import nami from "../../images/lolicon.png";
import axios from "axios";

import "../css/MyPage.css";

const MyPage = () => {
  const [profileUrl, setProfileUrl] = useState(nami);
  const [input, setInput] = useState("");
  const [champ, setChamp] = useState([]);
  const [nextId, setNextId] = useState(0);
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

  const onChangeProfileUrl = (e) => {
    setProfileUrl(e.target.files[0]);
  };

  const onClickSave = () => {
    axios
      .post("ServerUrl", {
        favchamp: champ,
        line: buttonState,
        profileUrl: profileUrl,
      })
      .then(() => {});
  };

  return (
    <div className="mp-container">
      <MpLeft
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
