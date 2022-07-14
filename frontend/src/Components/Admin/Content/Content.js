import React, { useState, useEffect } from "react";
import SearchContent from "./SearchContent";
import TableContent from "./TableContent";

const Content = (props) => {
  const [display, setDisplay] = useState("block");
  useEffect(() => {
    setDisplay(window.location.pathname === "/admin" ? "block" : "none");
    document.querySelector(".searchBar").style.display = display;
  }, [display]);
  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">{props.tableName} Table</h3>
        </div>
        <div className="col-md-12 searchBar">
          <SearchContent />
        </div>
        <div className="col-md-12">
          <TableContent />
        </div>
      </div>
    </div>
  );
};
export default Content;
