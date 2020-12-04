import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Table.css";
import axios from "axios";
import formatdate from "../Formatdate";
import Pagination from "../Pagination";

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const reversePosts = posts.slice(0).reverse();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = reversePosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            {currentPosts.map((post) => {
              return (
                <tr>
                  <td className="c0">{post.line}</td>
                  <td className="c1">
                    <Link to="/readmypage">{post.userName}</Link>
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
        <div className="pgntion">
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
