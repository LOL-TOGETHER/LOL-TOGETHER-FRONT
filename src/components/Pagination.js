import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginationcont">
      <ul className="pageli">
        {pageNumbers.map((number) => (
          <li className="pageli" key={number}>
            <button className="pagebutton" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
