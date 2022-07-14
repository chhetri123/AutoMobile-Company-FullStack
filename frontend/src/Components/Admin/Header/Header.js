import React from "react";
import Card from "./Card";
const Header = () => {
  return (
    <div className="container content" style={{ padding: "30px" }}>
      <hr />
      <div className="row">
        {[
          ["Customer", 1000],
          ["Car", 200],
          ["Model", 89],
          ["Brand", 100],
          ["Dealer", 200],
          ["Sales", 100],
        ].map((el) => (
          <Card table={el[0]} number={el[1]} key={el[0] + el[1]} />
        ))}
      </div>
    </div>
  );
};

export default Header;
