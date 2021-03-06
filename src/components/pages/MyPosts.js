import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import formatdate from "../Formatdate";

const MyPosts = () => {
  const [MyPosts, setMyPosts] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://13.209.193.142:7000/board/mylist", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setMyPosts(response.data);
      });
  }, []);

  const onClickDelete = (mypostId) => {
    axios
      .delete(`http://13.209.193.142:7000/board?boardId=${mypostId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() =>
        setMyPosts(MyPosts.filter((mypost) => mypost.id !== mypostId))
      );
  };
  return (
    <div>
      <div className="table-container2">
        <table>
          <thead>
            <tr>
              <th>라인</th>
              <th>작성시간</th>
              <th>글제목</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {MyPosts.map((post) => {
              return (
                <tr>
                  <td className="c0">{post.line}</td>
                  <td className="c1">{formatdate(post.updated_date_time)}</td>

                  <td className="c2">
                    <Link to={`/detailpage/${post.id}`}>{post.title}</Link>
                  </td>

                  <td className="c3">
                    <button
                      className="mypostbtn"
                      onClick={() => onClickDelete(post.id)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pgntion"></div>
      </div>
    </div>
  );
};

export default MyPosts;
