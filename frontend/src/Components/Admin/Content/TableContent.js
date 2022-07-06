import React from "react";
import TableRow from "./TableRow";
const data = [
  {
    course_id: "BEI123",
    title: "Theory of Electronics",
    dept_name: "Computer",
    credits: 3,
  },
  {
    course_id: "CS102",
    title: "Theory of Computation",
    dept_name: "Computer",
    credits: 3,
  },
  {
    course_id: "CS104",
    title: "Discrete Structure",
    dept_name: "Computer",
    credits: 3,
  },
  {
    course_id: "CS105",
    title: "Data Structure",
    dept_name: "Computer",
    credits: 4,
  },
  {
    course_id: "CS106",
    title: "Database",
    dept_name: "Computer",
    credits: 5,
  },
  {
    course_id: "CS107",
    title: "Artificial Intelligence",
    dept_name: "Computer",
    credits: 4,
  },
  {
    course_id: "EL105",
    title: "Basic Electrical",
    dept_name: "Electrical",
    credits: 3,
  },
  {
    course_id: "EX104",
    title: "Computer Graphics",
    dept_name: "Electronics",
    credits: 4,
  },
  {
    course_id: "EX105",
    title: "Basic Electronics",
    dept_name: "Electronics",
    credits: 3,
  },
  {
    course_id: "SH104",
    title: "Physics",
    dept_name: "Humanities",
    credits: 3,
  },
];
const TableContent = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table-active">
          {["SN ", ...Object.keys(data[0])].map((el) => (
            <th key={Math.random()} scope="col">
              {el}
            </th>
          ))}
        </tr>
        {data.map((el, ind) => (
          <TableRow
            key={"" + Math.random()}
            sn={ind + 1}
            data={Object.values(el)}
          />
        ))}
      </thead>
    </table>
  );
};

export default TableContent;
