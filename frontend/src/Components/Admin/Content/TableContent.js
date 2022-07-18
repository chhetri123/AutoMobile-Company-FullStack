import React from "react";
import TableRow from "./TableRow";
import "./TableContent.css";
const TableContent = ({ queryData, errMsg, addData }) => {
  console.log(addData);
  return queryData.length === 0 ? (
    <div className="text-center">{errMsg}</div>
  ) : (
    <>
      {addData ? (
        <div style={{ marginLeft: "90%", marginBottom: "10px" }}>
          <button
            className="btn btn-primary btn-rounded"
            data-toggle="modal"
            data-target={`#${addData}`}
          >
            Add Data
          </button>
        </div>
      ) : (
        ""
      )}
      <table className="table admin_table">
        <thead>
          <tr className="table-active">
            {["SN ", ...Object.keys(queryData[0])].map((el) => (
              <th key={Math.random()} scope="col">
                {el}
              </th>
            ))}
          </tr>
          {queryData.map((el, ind) => (
            <TableRow
              key={"" + Math.random()}
              sn={ind + 1}
              data={Object.values(el)}
            />
          ))}
        </thead>
      </table>
    </>
  );
};

export default TableContent;
