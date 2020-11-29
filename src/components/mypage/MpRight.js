import React, { useState } from "react";
import "../css/MyPage.css";
import champData from "../../static-data/champ-static-data";

const MpRight = () => {
  const [input, setInput] = useState("");
  const [champ, setChamp] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [buttonState, setButtonState] = useState("");

  const onClickLine = (e) => {
    setButtonState(e.target.name);
    console.log(buttonState);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const OnClickButton = (e) => {
    e.preventDefault();
    let champdatainfo;
    for (let i in champData.data) {
      if (champData.data[i].name === input)
        champdatainfo = champData.data[i].key;
      console.log(champdatainfo);
    }

    const nextChamp = champ.concat({
      id: nextId,
      name: input,
      icon: champdatainfo,
    });

    setNextId(nextId + 1);
    setChamp(nextChamp);

    setInput("");
  };

  const champList = champ.map((champ) => (
    <li key={champ.id}>
      <div>
        <img
          className="iconimg"
          alt=""
          src={`https://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${champ.icon}.png`}
        />
      </div>
      {champ.name}
    </li>
  ));

  return (
    <div className="mp-container-right">
      <div className="favchamp-info">
        <form className="right-form" onSubmit={OnClickButton}>
          <h1>선호하는 챔피언</h1>
          <div className="mp-inputs">
            <input
              className="mp-input"
              value={input}
              onChange={handleInput}
              placeholder="챔피언을 입력하시오."
            />
            <button className="mp-button" type="submit">
              추가
            </button>
          </div>
        </form>
        <ul>{champList}</ul>
      </div>
      <div className="preferline">
        <h1>선호하는 라인</h1>
        <div className="preferline-1">
          <input
            className="img-line"
            type="image"
            src="/images/top.PNG"
            alt=""
            name="top"
            value="TOP"
            onClick={onClickLine}
          />
          <input
            className="img-line"
            type="image"
            src="/images/jungle.PNG"
            alt=""
            name="jungle"
            value="JUNGLE"
            onClick={onClickLine}
          />
          <input
            className="img-line"
            type="image"
            src="/images/mid.PNG"
            alt=""
            name="mid"
            value="MID"
            onClick={onClickLine}
          />
          <input
            className="img-line"
            type="image"
            src="/images/bot.PNG"
            alt=""
            name="bot"
            value="BOTTOM"
            onClick={onClickLine}
          />
          <input
            className="img-line"
            type="image"
            src="/images/sup.PNG"
            alt=""
            name="sup"
            value="SUPPORT"
            onClick={onClickLine}
          />
        </div>
        {buttonState ? (
          <img className="img-line-reply" src={`/images/${buttonState}.PNG`} />
        ) : (
          <h3>라인을 고르시오</h3>
        )}
      </div>
    </div>
  );
};

export default MpRight;
