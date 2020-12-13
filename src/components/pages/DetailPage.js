import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/DetailPage.css";
import formatDate from "../Formatdate";

const DetailPage = () => {
  const [post, setPost] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState([]);

  const postId = window.location.href.split("detailpage/")[1];
  const token = localStorage.getItem("token");

  const handleCommentContent = (e) => {
    setInputComment(e.target.value);
  };

  const deleteComment = (commentId) => {
    axios
      .delete(
        `http://13.209.193.142:7000/board/comment?boardId=${postId}&id=${commentId}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setComments(comments.filter((comment) => comment.id !== commentId));
        alert(response.message);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    const postId = window.location.href.split("detailpage/")[1];
    axios
      .get(`http://13.209.193.142:7000/board?boardId=${postId}`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data[0]);
      })
      .catch((error) => console.log(error.response));

    axios
      .get(`http://13.209.193.142:7000/board/comment?boardId=${postId}`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const onClickComment = () => {
    axios
      .post(
        `http://13.209.193.142:7000/board/comment?boardId=${postId}`,
        {
          content: inputComment,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => window.location.reload())
      .catch((error) => alert(error.response));
  };
  console.log(post);
  const commentlist = comments.map((comment) => (
    <li key={comment.id}>
      <div className="comment-mapli">
        <div className="com-username"> {comment.userName}</div>
        <div className="com-content">{comment.content}</div>
        <div className="com-time-delete">
          {formatDate(comment.updated_data_time)}
          <button
            className="com-delete-btn"
            type="button"
            onClick={() => {
              deleteComment(comment.id);
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <div className="beigeLayer">
        <div className="detail-main">
          <div className="detail-shadow">
            <div className="title">
              <h1>{post.title}</h1>
              <p>{post.name}</p>
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
                  value={inputComment}
                  onChange={handleCommentContent}
                  placeholder="댓글을 입력하시오."
                />
                <button type="button" onClick={onClickComment}>
                  등록
                </button>
              </div>
            </div>

            <ul>{commentlist}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
