import React, { useEffect, useState } from "react";
import Card from "./Card";
const Header = () => {
  const [tableStats, setTableStats] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT_API}/stats`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setTableStats(data.stats);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container content" style={{ padding: "30px" }}>
      <hr />
      <div className="row">
        {tableStats.map((el, i) => (
          <Card
            table={Object.keys(el)}
            number={Object.values(el)}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
