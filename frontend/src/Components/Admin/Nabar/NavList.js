import React from "react";
const NavList = ({ title }) => {
  return (
    <>
      <li className="active" key={title}>
        <a href={`/${title}`}>
          <span className="mr-3 ml-2">{title}</span>
        </a>
      </li>
    </>
  );
};

export default NavList;
