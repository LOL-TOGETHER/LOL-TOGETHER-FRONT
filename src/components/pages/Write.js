import React, { useState } from "react";
import axios from "axios";
import "../css/Write.css";
import top from "../../images/Position_Diamond-Top.png";
import jug from "../../images/Position_Diamond-Jungle.png";
import mid from "../../images/Position_Diamond-Mid.png";
import bot from "../../images/Position_Diamond-Bot.png";
import sup from "../../images/Position_Diamond-Support.png";
import { Link } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [line, setLine] = useState("");
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const HandleTitle = (e) => {
    setTitle(e.target.value);
  };

  const HandleLine = (e) => {
    setLine(e.target.value);
  };
  const HandleUsername = (e) => {
    setUsername(e.target.value);
  };
  const HandleContent = (e) => {
    setContent(e.target.value);
  };

  const ClickWrite = () => {
    axios
      .post("http://13.209.193.142:7000/board", {
        title: title,
        line: line,
        content: content,
        userName: username,
      })
      .then((response) => {
        alert(response.data.message);
      });

    console.log(title);
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
                    value={title}
                    onChange={HandleTitle}
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
                      onClick={HandleLine}
                      checked={line === "top"}
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
                      onClick={HandleLine}
                      checked={line === "jug"}
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
                      onClick={HandleLine}
                      checked={line === "mid"}
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
                      onClick={HandleLine}
                      checked={line === "bot"}
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
                      onClick={HandleLine}
                      checked={line === "sup"}
                    />
                    서폿
                    <img className="writeicon" src={sup} alt="" />
                  </label>
                </div>
              </div>
            </div>
            <div className="content-dt-wr">
              <h3 className="content-h3">내용:</h3>
              <textarea
                value={content}
                onChange={HandleContent}
                className="wr-textarea"
              >
                자주하는 챔피언, 구하고자 하는 라이너, 자신의 롤 성향 등등
                입력하세요 ~
              </textarea>
            </div>
            <div className="wr-button">
              <Link to="/board">
                <button type="submit" onClick={ClickWrite}>
                  작성
                </button>
              </Link>
              <br />
              작성자(로그인구현시지울거야):
              <input
                value={username}
                onChange={HandleUsername}
                placeholder="작성자 닉네임 입력"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
