import React, { useState } from "react";
import "../css/MyPage.css";

const MpRight = () => {
  const [input, setInput] = useState("");
  const [champ, setChamp] = useState([{ id: 0, name: "" }]);
  const [nextId, setNextId] = useState(0);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const OnClickButton = () => {
    const nextChamp = champ.concat({
      id: nextId,
      name: input,
    });

    setNextId(nextId + 1);
    setChamp(nextChamp);
    console.log(champ);
  };
  const champList = champ.map((name, index) => (
    <li key={index}>{champ.name}</li>
  ));

  return (
    <div className="mp-container-right">
      <div>
        <h1>선호챔피언</h1>
        <input
          value={input}
          onChange={handleInput}
          placeholder="챔피언을 입력하시오."
        />
        <button onClick={OnClickButton}>추가</button>
        <ul>{champList}</ul>
      </div>
      <div>
        <h1>선호포지션</h1>
      </div>
    </div>
  );
};

export default MpRight;
