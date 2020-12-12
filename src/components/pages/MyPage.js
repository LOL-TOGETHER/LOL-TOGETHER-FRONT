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
  const token = localStorage.getItem("token");
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

  const onClickSave = (e) => {
    const formData = new FormData();
    formData.append("img", profileUrl);
    axios.post("http://13.209.193.142:7000/upload").then((response) => {
      setProfileUrl(response.data);
    });

    const champions = [champ[0].engname, champ[1].engname, champ[2].engname];
    const name = username;

    axios
      .put(
        "http://13.209.193.142:7000/mypage",
        {
          champions: [champions[0], champions[1], champions[2]],
          line: buttonState,
          name: name,
          profileUrl: profileUrl,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {})
      .catch((error) => alert(error.response.data));
  };

  return (
    <div className="mp-container">
      <MpLeft
        onChangeUsername={onChangeUsername}
        username={username}
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
