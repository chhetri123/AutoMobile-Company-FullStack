import React from "react";
import "./SearchContent.css";
const SearchContent = () => {
  return (
    <div className="form-outline text-center mb-4">
      <input
        type="search"
        id="query"
        className="form-control p-3"
        placeholder="Type Query Here"
      />
    </div>
  );
};
export default SearchContent;
