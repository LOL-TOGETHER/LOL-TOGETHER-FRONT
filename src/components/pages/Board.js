import React from "react";
import posts from "../../static-data/tabledata";

const Board = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>태그</th>
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
                <td>{post.username}</td>
                <td>{post.content}</td>
                <td>{post.updatedTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
