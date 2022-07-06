import React from "react";
import TableRow from "../../Admin/Content/TableRow";

const object = [
  { key: "Jacob", value: "Thornton" },
  { key: "@fat", value: "@fat" },
  { key: "Alberto", value: "Alberto" },
];
const RightDetails = (props) => {
  return (
    <>
      {object.map((el) => (
        <div className="media-body">
          <h5 className="mt-0">props.title</h5>
          <table className="table table-sm table-striped">
            <tbody>
              {object.map((el) => (
                <TableRow fromUser={true} data={Object.values(el)} />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default RightDetails;
