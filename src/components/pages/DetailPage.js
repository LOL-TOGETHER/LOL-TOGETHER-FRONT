import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/DetailPage.css";

const DetailPage = () => {
  const [post, setPost] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState([]);
  const [commentuser, setCommentuser] = useState("");

  const postId = window.location.href.split("detailpage/")[1];

  const handleCommentContent = (e) => {
    setInputComment(e.target.value);
  };
  const handleCommentuser = (e) => {
    setCommentuser(e.target.value);
  };

  const deleteComment = (commentId) => {
    axios
      .delete(
        `http://13.209.193.142:7000/board/comment?board_Id=${postId}&id=${commentId}`
      )
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== commentId));
        console.log(commentId);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    const postId = window.location.href.split("detailpage/")[1];
    axios
      .get(`http://13.209.193.142:7000/board?boardId=${postId}`)
      .then((response) => {
        setPost(response.data[0]);
      });

    axios
      .get(`http://13.209.193.142:7000/board/comment?boardId=${postId}`)
      .then((response) => {
        setComments(response.data);
        console.log(response.data);
      });
  }, []);

  const onClickComment = () => {
    axios
      .post(`http://13.209.193.142:7000/board/comment?boardId=${postId}`, {
        userName: commentuser,
        content: inputComment,
      })
      .then(() => window.location.reload());
  };

  const commentlist = comments.map((comment) => (
    <li key={comment.id}>
      <div>
        {comment.userName}:{comment.content}
      </div>
      <button
        type="button"
        onClick={() => {
          deleteComment(comment.id);
        }}
      >
        x
      </button>
    </li>
  ));

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
                <input
                  value={commentuser}
                  onChange={handleCommentuser}
                  placeholder="닉네임(인증구현되면지움)"
                />
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
