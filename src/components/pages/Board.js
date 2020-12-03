import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Table.css";
import axios from "axios";
import formatdate from "../Formatdate";

const Board = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://13.209.193.142:7000/board/list").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <div className="table-container">
        <div className="wrt">
          <Link to="/myposts">
            <button>내가 쓴 글</button>
          </Link>
          <Link to="/write">
            <button>글쓰기</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>라인</th>
              <th>작성자</th>
              <th>글제목</th>
              <th>작성시간</th>
            </tr>
          </thead>
          <tbody>
            {posts
              .slice(0)
              .reverse()
              .map((post) => {
                return (
                  <tr>
                    <td className="c0">{post.line}</td>
                    <td className="c1">
                      <Link to="/summonerinfo">{post.userName}</Link>
                    </td>

                    <td className="c2">
                      <Link to={`/detailpage/${post.id}`}>{post.title}</Link>
                    </td>

                    <td className="c3">{formatdate(post.updated_date_time)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="pgntion">PAGINATION HERE</div>
      </div>
    </div>
  );
};

export default Board;
