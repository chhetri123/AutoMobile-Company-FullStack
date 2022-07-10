import React from "react";
import TableRow from "../../../Admin/Content/TableRow";
const title = [
  "General Information",
  "Performance Specs",
  "Drivetrain, brakes and suspension specs",
];
const RightDetails = (props) => {
  const array = [];
  props.data.options &&
    props.data.options.forEach((items) => {
      const array1 = [];
      const value = Object.values(items);
      const keys = Object.keys(items).map((name) =>
        name.replace("_", " ").toUpperCase()
      );
      keys.forEach((key, ind) => {
        let subArray = [];
        subArray.push(keys[ind]);
        subArray.push(value[ind]);
        array1.push(subArray);
      });
      array.push(array1);
    });

  return (
    <>
      {props.data.options &&
        array.map((items, ind) => (
          <div className="media-body" key={Math.random()}>
            <h5 className="mt-0 text-dark">{title[ind]}</h5>
            <table className="table table-sm table-striped">
              <tbody>
                {items.map((el) => (
                  <TableRow fromUser={true} data={el} key={Math.random()} />
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </>
  );
};

export default RightDetails;
