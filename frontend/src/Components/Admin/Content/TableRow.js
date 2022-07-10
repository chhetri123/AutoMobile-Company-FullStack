import React from "react";
const TableRow = (props) => {
  return (
    <tr key={Math.random()}>
      {props.fromUser ? "" : <th scope="row">{props.sn}</th>}
      {props.data.map((el) => (
        <td key={Math.random()}>{el}</td>
      ))}
    </tr>
  );
};
export default TableRow;
