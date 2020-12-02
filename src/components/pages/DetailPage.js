import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/DetailPage.css";

const DetailPage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const postId = window.location.href.split("detailpage/")[1];

    axios
      .get(`http://localhost:7000/board?boardId=${postId}`)
      .then((response) => {
        setPost(response.data);
      });
  });
  return (
    <div>
      <div className="beigeLayer">
        <div className="detail-main">
          <div className="detail-shadow">
            <div className="title">
              <h1>{post.title}</h1>
              <p>{post.userName}</p>
              <h6>{post.updated_date_time}</h6>
            </div>
            <div className="content-dt">
              <p>{post.content}</p>
            </div>
            <div className="comment_container">
              <h4> 댓글 </h4>
              <div className="comment_write">
                <textarea
                  rows="3"
                  maxLength="100"
                  placeholder="댓글을 입력하시오."
                />
                <button type="button">등록</button>
              </div>
            </div>
            <ul>
              <li>페이커: 와 ㅋㅋㅋ 대박인데</li>
              <li>쇼메이커: 어그로 실화야?</li>
              <li>뱅: 노잼. 글삭하셈</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
