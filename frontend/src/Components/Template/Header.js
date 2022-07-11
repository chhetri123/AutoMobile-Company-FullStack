import React from "react";

const Header = (props) => {
  return (
    <div className="container mt-3">
      <h3 className="text-center" style={{ color: "orangered" }}>
        {props.headerName}
      </h3>
    </div>
  );
};
export default Header;
