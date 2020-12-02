import Axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MyPosts = () => {
  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>라인</th>
              <th>글제목</th>
              <th>작성시간</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {/* {posts.map((post) => {
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
            })} */}
          </tbody>
        </table>
        <div className="pgntion">PAGINATION HERE</div>
      </div>
    </div>
  );
};

export default MyPosts;
