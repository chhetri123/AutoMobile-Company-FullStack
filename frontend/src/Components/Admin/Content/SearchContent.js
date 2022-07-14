import React from "react";
import "./SearchContent.css";
const SearchContent = () => {
  return (
    <div className="text-center mb-4 admin_search">
      <input
        type="search"
        id="query"
        className="queryInput"
        placeholder="Type Query Here"
      />
    </div>
  );
};
export default SearchContent;
