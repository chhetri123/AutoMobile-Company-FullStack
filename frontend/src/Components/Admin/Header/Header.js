import React from "react";
import Card from "./Card";
const Header = () => {
  return (
    <div className="row" style={{ height: "27%" }}>
      {[
        ["Customer", 1000],
        ["Car", 200],
        ["Model", 89],
        ["Brand", 100],
        ["Dealer", 200],
      ].map((el) => (
        <Card table={el[0]} number={el[1]} key={el[0] + el[1]} />
      ))}
    </div>
  );
};

export default Header;
