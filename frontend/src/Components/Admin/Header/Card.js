import React from "react";

const Card = ({ table, number }) => {
  return (
    <div className="col-sm-2 mt-1 mx-1" key={Math.random()}>
      <div className="card" style={{ width: "10rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center fs-6">{number}</h5>
          <p className="card-text text-center">{table}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
