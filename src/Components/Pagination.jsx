import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {/* <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul> */}

      <ul className="flex items-center justify-center mb-5">
        {pageNumbers.map((number) => (
          <li
            className="p-1 mr-3  rounded-full bg-blue-500 rounded-full h-8 w-8 text-white  flex items-center justify-center cursor-pointer hover:bg-blue-700"
            key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
