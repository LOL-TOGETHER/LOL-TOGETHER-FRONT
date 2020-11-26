import React, { useState } from "react";
import "../css/MyPage.css";
import champimage from "../../images/Lux.png";
import champData from '../../static-data/champ-static-data';

const MpRight = () => {
  const [input, setInput] = useState("");
  const [champ, setChamp] = useState([]);
  const [nextId, setNextId] = useState(0);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const OnClickButton = (e) => {
    e.preventDefault();
    const nextChamp = champ.concat({
      id: nextId,
      name: input,
    });

    setNextId(nextId + 1);
    setChamp(nextChamp);
    setInput("");
  };
  const champList = champ.map((champ) => (
    <li key={champ.id}>
      {champ.name}
      <img className="lux" alt="" src={champimage} />
    </li>
  ));

  return (
    <div className="mp-container-right">
      <div className="favchamp-info">
        <div>
          <h1>선호챔피언</h1>
          <form className="right-form" onSubmit={OnClickButton}>
            <input
              value={input}
              onChange={handleInput}
              placeholder="챔피언을 입력하시오."
            />
            <button type="submit">추가</button>
            <ul>{champList}</ul>
          </form>
        </div>
      </div>
      <div className="">
        <h1>선호포지션</h1>
      </div>
    </div>
  );
};

export default MpRight;
