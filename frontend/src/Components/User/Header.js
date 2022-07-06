import React from "react";

const Header = (props) => {
  return (
    <div className="container">
      <h2 className="text-center">{props.headerName}</h2>
    </div>
  );
};
export default Header;
