import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import querystring from "querystring";
import "../css/Table.css";
import axios from "axios";
import formatdate from "../Formatdate";
import Pagination from "../Pagination";

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  // const reversePosts = posts.slice(0).reverse();
  const limit = 10;

  const page = querystring.parse(window.location.search)["?page"] || 0;

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `http://13.209.193.142:7000/board/list?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setPosts(response.data.response);
        setTotalCount(response.data.count.total);
      })
      .catch((error) => alert(error));
  }, [page]);

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
            {posts.map((post) => {
              return (
                <tr>
                  <td className="c0">
                    {post.line === "mid" ? "미드" : ""}
                    {post.line === "bot" ? "원딜" : ""}
                    {post.line === "jug" ? "정글" : ""}
                    {post.line === "top" ? "탑" : ""}
                    {post.line === "sup" ? "서폿" : ""}
                  </td>
                  <td className="c1">
                    <Link to={`/mypage/partner/${post.memberId}`}>
                      {post.name}
                    </Link>
                  </td>

                  <td className="c2">
                    <Link to={`/detailpage/${post.id}`}>{post.title}</Link>
                  </td>

                  <td className="c3">{formatdate(post.created_data_time)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pgntion">
          <Pagination postPerPage={limit} totalPosts={totalCount} />
        </div>
      </div>
    </div>
  );
};

export default Board;
