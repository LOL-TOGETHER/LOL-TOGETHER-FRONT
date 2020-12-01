import React, { useState } from "react";
import "../css/Write.css";
import top from "../../images/Position_Diamond-Top.png";
import jug from "../../images/Position_Diamond-Jungle.png";
import mid from "../../images/Position_Diamond-Mid.png";
import bot from "../../images/Position_Diamond-Bot.png";
import sup from "../../images/Position_Diamond-Support.png";

const Write = () => {
  const [selected, SetSelected] = useState("");
  const HandleSelected = (e) => {
    SetSelected(e.target.value);
  };
  return (
    <div>
      <div className="beigeLayer-wr">
        <div className="detail-main-wr">
          <div className="detail-shadow-wr">
            <div className="title-wr">
              <div className="titlesemi">
                <div>
                  <h3>제목:</h3>
                </div>
                <div>
                  <input
                    className="titleinput"
                    placeholder="제목을 입력하세요"
                  />
                </div>
              </div>
              <h3>주 라인:</h3>
              <div className="radiocontainer">
                <div>
                  <label>
                    <input
                      type="radio"
                      value="top"
                      onClick={HandleSelected}
                      checked={selected === "top"}
                    />
                    탑
                    <img className="writeicon" src={top} alt="" />
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="jug"
                      onClick={HandleSelected}
                      checked={selected === "jug"}
                    />
                    정글
                    <img className="writeicon" src={jug} alt="" />
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="mid"
                      onClick={HandleSelected}
                      checked={selected === "mid"}
                    />
                    미드
                    <img className="writeicon" src={mid} alt="" />
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="bot"
                      onClick={HandleSelected}
                      checked={selected === "bot"}
                    />
                    원딜
                    <img className="writeicon" src={bot} alt="" />
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="sup"
                      onClick={HandleSelected}
                      checked={selected === "sup"}
                    />
                    서폿
                    <img className="writeicon" src={sup} alt="" />
                  </label>
                </div>
              </div>
            </div>
            <div className="content-dt-wr">
              <h3 className="content-h3">내용:</h3>
              <textarea className="wr-textarea">
                자주하는 챔피언, 구하고자 하는 라이너, 자신의 롤 성향 등등
                입력하세요 ~
              </textarea>
            </div>
            <div className="wr-button">
              <button type="submit">작성</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
