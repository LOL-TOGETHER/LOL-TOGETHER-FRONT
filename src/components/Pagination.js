import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ postPerPage, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginationcont">
      <ul className="pageli">
        {pageNumbers.map((number) => (
          <li className="pageli" key={number}>
            <Link to={`?page=${number - 1}`}>
              <button className="pagebutton">{number}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
