import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Table.css";
import axios from "axios";

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
            {posts.map((post) => {
              return (
                <tr>
                  <td>{post.line}</td>
                  <td>
                    <Link to="/summonerinfo">{post.userName}</Link>
                  </td>

                  <td>
                    <Link to={`/detailpage/${post.id}`}>{post.title}</Link>
                  </td>

                  <td>{post.updated_date_time}</td>
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
