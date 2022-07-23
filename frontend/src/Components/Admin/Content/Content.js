import React, { useState, useEffect } from "react";
import SearchContent from "./SearchContent";
import TableContent from "./TableContent";

const Content = (props) => {
  const [queryData, setQueryData] = useState([]);
  const [errMsg, setErrMsg] = useState("Enter the Query For data");

  function onSubmitQuery(query) {
    fetch(`${process.env.REACT_APP_ROOT_API}/getquery?query=${query}`)
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
        setQueryData([]);
        setErrMsg(err.message);
      });
  }
  useEffect(() => {
    if (props.tableName) {
      fetch(`${process.env.REACT_APP_ROOT_API}/${props.tableName}`)
        .then((data) => data.json())
        .then((res) => {
          setQueryData(res.data);
        });
    }
  }, [props.tableName]);
  return (
    <>
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center text-capitalize">
              {props.tableName && ""} Table
            </h3>
          </div>
          {props.tableName === undefined ? (
            <div className="col-md-12">
              <SearchContent onSubmitQuery={onSubmitQuery} />
            </div>
          ) : (
            ""
          )}

          <div className="col-md-12 tableContainer">
            <TableContent
              errMsg={errMsg}
              queryData={queryData}
              addData={props.modelId}
            />
            <hr />
          </div>
        </div>
      </div>

      {props.element}
    </>
  );
};
export default Content;
