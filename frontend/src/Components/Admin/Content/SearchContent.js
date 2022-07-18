import React, { useEffect, useRef, useCallback } from "react";
import "./SearchContent.css";
const SearchContent = ({ onSubmitQuery }) => {
  const inputRef = useRef(null);
  const handleSubmit = useCallback(
    (e) => {
      if (e.key === "Enter") {
        const inputQuery = inputRef.current.value;
        inputRef.current.value = "";
        onSubmitQuery(inputQuery);
      }
    },
    [onSubmitQuery]
  );
  useEffect(() => {
    const instance = inputRef.current;
    instance?.addEventListener("keydown", handleSubmit);
    return () => instance?.removeEventListener("keydown", handleSubmit);
  }, [handleSubmit]);
  return (
    <div className="text-center mb-4 admin_search">
      <input
        ref={inputRef}
        type="search"
        id="query"
        className="queryInput"
        placeholder="Type Query Here"
      />
    </div>
  );
};
export default SearchContent;
