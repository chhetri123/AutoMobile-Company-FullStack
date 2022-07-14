import React from "react";
import AnimateNumber from "../../Template/AnimateNumber";

const Card = ({ table, number }) => {
  return (
    <div className="col-sm mt-1" key={Math.random()}>
      <div
        className="card"
        style={{
          width: "9rem",
          padding: "0px",
          boxShadow: "rgb(0 0 91 / 33%)  0px 5px 11px 5px",
        }}
      >
        <div className="card-body">
          <h5 className="card-title text-center fs-6">
            <AnimateNumber number={number} />
          </h5>
          <p className="card-text text-center fs-25">{table}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
