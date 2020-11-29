import React from "react";
import { Link } from "react-router-dom";
import posts from "../../static-data/tabledata";
import "../css/Table.css";

const Board = () => {
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
                  <td>{post.tag}</td>
                  <td>
                    <Link to="/summonerinfo">{post.username}</Link>
                  </td>

                  <td>
                    <Link to="/detailpage">{post.content}</Link>
                  </td>

                  <td>{post.updatedTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Board;
