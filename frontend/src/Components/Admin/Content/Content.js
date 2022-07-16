import React, { useState, useEffect } from "react";
import SearchContent from "./SearchContent";
import TableContent from "./TableContent";

const Content = (props) => {
  const [queryData, setQueryData] = useState([]);
  const [errMsg, setErrMsg] = useState("Enter the Query For data");

  function onSubmitQuery(query) {
    fetch(`http://localhost:3000/api/v1/getquery?query=${query}`)
      .then((data) => data.json())
      .then((res) => {
        if (res.status === 200) {
          setQueryData(res.stats);
        } else {
          setQueryData([]);
          setErrMsg(res.msg.split(":")[1]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    if (props.tableName) {
      fetch(`http://localhost:3000/api/v1/${props.tableName}`)
        .then((data) => data.json())
        .then((res) => {
          setQueryData(res.data);
        });
    }
  }, [props.tableName]);

  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center text-capitalize">
            {props.tableName} Table
          </h3>
        </div>

        <div
          className={`col-md-12 ${
            props.tableName === undefined ? "" : "searchBar"
          }`}
        >
          <SearchContent onSubmitQuery={onSubmitQuery} />
        </div>
        <div className="col-md-12 tableContainer">
          <TableContent errMsg={errMsg} queryData={queryData} />
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Content;
