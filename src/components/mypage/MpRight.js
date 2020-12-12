import React from "react";
import "../css/MyPage.css";
import TOP from "../../images/top.PNG";
import JUG from "../../images/jungle.PNG";
import MID from "../../images/mid.PNG";
import BOT from "../../images/bot.PNG";
import SUP from "../../images/sup.PNG";

const MpRight = ({
  input,
  champ,
  champList,
  nextId,
  buttonState,
  OnClickButton,
  handleInput,
  onClickLine,
}) => {
  return (
    <div className="mp-container-right">
      <div className="favchamp-info">
        <form className="right-form" onSubmit={OnClickButton}>
          <h1>선호하는 챔피언(3개)</h1>
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
            src={TOP}
            alt=""
            name="top"
            value="TOP"
            onClick={onClickLine}
          />
          <input
            className="img-line"
            type="image"
            src={JUG}
            alt=""
            name="jungle"
            value="JUNGLE"
            onClick={onClickLine}
          />
          <input
            className="img-line"
            type="image"
            src={MID}
            alt=""
            name="mid"
            value="MID"
            onClick={onClickLine}
          />
          <input
            className="img-line"
            type="image"
            src={BOT}
            alt=""
            name="bot"
            value="BOTTOM"
            onClick={onClickLine}
          />
          <input
            className="img-line"
            type="image"
            src={SUP}
            alt=""
            name="sup"
            value="SUPPORT"
            onClick={onClickLine}
          />
        </div>
        <h3>라인을 고르시오:</h3>
        <div className="lineimgcont">
          {buttonState === "top" ? (
            <img className="img-line-reply" src={TOP} alt="" />
          ) : (
            <div></div>
          )}
          {buttonState === "jungle" ? (
            <img className="img-line-reply" src={JUG} alt="" />
          ) : (
            <div></div>
          )}
          {buttonState === "mid" ? (
            <img className="img-line-reply" src={MID} alt="" />
          ) : (
            <div></div>
          )}
          {buttonState === "bot" ? (
            <img className="img-line-reply" src={BOT} alt="" />
          ) : (
            <div></div>
          )}
          {buttonState === "sup" ? (
            <img className="img-line-reply" src={SUP} alt="" />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MpRight;
