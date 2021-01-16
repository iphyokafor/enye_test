import React from "react";
import Slide from "react-reveal/Slide";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <Slide right delay={1000}>
        <ul className="flex items-end justify-end mt-5">
          <li>
            <p className="p-1 mr-3 animate-ping font-semibold text-blue-300">
              Page
            </p>
          </li>
          {pageNumbers.map((number) => (
            <li
              className="p-1 mr-3  rounded-lg animate-bounce bg-blue-500 h-8 w-8 text-white  flex items-center justify-center cursor-pointer hover:bg-blue-700"
              key={number}>
              <a onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </Slide>
    </div>
  );
};

export default Pagination;
