import React from "react";
import "../css/ReadMyPage.css";
import pfimage from "../../images/Lux.png";
import line from "../../images/bot.PNG";

const ReadMyPage = () => {
  return (
    <>
      <h1>상대방이 보는 나의 정보 페이지</h1>
      <div className="rmp-container">
        <div className="rmp-container-left">
          <div className="rmp-left-cont1">
            <img className="rmp-left-img" src={pfimage} alt="" />
          </div>
          <div className="rmp-left-cont2">
            <h1>닉네임</h1>
          </div>
          <div className="rmp-left-cont3">
            <a
              className="rmp-left-atag"
              href="https://www.op.gg/summoner/userName=노을수리"
            >
              Op GG전적검색
            </a>
          </div>
        </div>
        <div className="rmp-container-right">
          <div className="rmp-right-cont1">
            <div>
              <h1>선호하는 라인</h1>
            </div>
            <div>
              <img src={line} alt="" className="rmp-right-line-img" />
            </div>
          </div>
          <div className="rmp-right-cont2">
            <div className="rpm-right-cont2-1">
              <h1>선호하는 챔피언</h1>
            </div>

            <ul className="rpm-right-cont2-2">
              <div className="rmp-right-li">
                <li className="li-rpm">
                  <div className="li-rpm-1">
                    <img
                      src={
                        "https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/MissFortune.png"
                      }
                      alt=""
                      className="rmp-right-icon"
                    />
                  </div>
                  <div className="li-rpm-2">미스 포츈</div>
                </li>
              </div>
              <div className="rmp-right-li">
                <li className="li-rpm">
                  <div className="li-rpm-1">
                    <img
                      src={
                        "https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/Caitlyn.png"
                      }
                      alt=""
                      className="rmp-right-icon"
                    />
                  </div>
                  <div className="li-rpm-2">케이틀린</div>
                </li>
              </div>
              <div className="rmp-right-li">
                <li className="li-rpm">
                  <div className="li-rpm-1">
                    <img
                      src={
                        "https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/TwistedFate.png"
                      }
                      alt=""
                      className="rmp-right-icon"
                    />
                  </div>
                  <div className="li-rpm-2">트위스티드 페이트</div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMyPage;
