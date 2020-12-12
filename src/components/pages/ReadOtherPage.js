import React, { useEffect, useState } from "react";
import "../css/ReadMyPage.css";
import axios from "axios";
import bot from "../../images/bot.PNG";
import sup from "../../images/sup.PNG";
import mid from "../../images/mid.PNG";
import jug from "../../images/jungle.PNG";
import top from "../../images/top.PNG";

const ReadMyPage = () => {
  const [member, setMember] = useState("");
  const [champ, setChamp] = useState("");
  const memberId = window.location.href.split("readotherpage/")[1];
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`/mypage/partner/userId=${memberId}`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setMember(response.data[0]);
        setChamp(response.data[0].champions.split(","));
        console.log(champ);
      });
  });

  return (
    <>
      <div className="rmp-container">
        <div className="rmp-container-left">
          <div className="rmp-left-cont1">
            <img className="rmp-left-img" src={member.profileUrl} alt="" />
          </div>
          <div className="rmp-left-cont2">
            <h1>{member.name}</h1>
          </div>
          <div className="rmp-left-cont3">
            <a
              className="rmp-left-atag"
              href={"https://www.op.gg/summoner/userName=" + member.name}
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
              {member.line === "bot" ? (
                <img src={bot} alt="" className="rmp-right-line-img" />
              ) : (
                ""
              )}
              {member.line === "sup" ? (
                <img src={sup} alt="" className="rmp-right-line-img" />
              ) : (
                ""
              )}
              {member.line === "mid" ? (
                <img src={mid} alt="" className="rmp-right-line-img" />
              ) : (
                ""
              )}
              {member.line === "jug" ? (
                <img src={jug} alt="" className="rmp-right-line-img" />
              ) : (
                ""
              )}
              {member.line === "top" ? (
                <img src={top} alt="" className="rmp-right-line-img" />
              ) : (
                ""
              )}
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
                      src={`https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/${champ[0]}.png`}
                      alt=""
                      className="rmp-right-icon"
                    />
                  </div>
                  <div className="li-rpm-2">{champ[0]}</div>
                </li>
              </div>
              <div className="rmp-right-li">
                <li className="li-rpm">
                  <div className="li-rpm-1">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/${champ[1]}.png`}
                      alt=""
                      className="rmp-right-icon"
                    />
                  </div>
                  <div className="li-rpm-2">{champ[1]}</div>
                </li>
              </div>
              <div className="rmp-right-li">
                <li className="li-rpm">
                  <div className="li-rpm-1">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/${champ[2]}.png`}
                      alt=""
                      className="rmp-right-icon"
                    />
                  </div>
                  <div className="li-rpm-2">{champ[2]}</div>
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
