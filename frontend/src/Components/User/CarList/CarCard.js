import React from "react";
import { Link } from "react-router-dom";
const CarCard = ({ data }) => {
  return (
    <div className="col-sm-3 my-2">
      <div className="itemBox">
        <div className="card">
          <div className="imgBox">
            <img src={data.url} alt="" />
          </div>
          <div className="contentBox">
            <h3>Brand</h3>
            <h3>{data.name}</h3>
            <h2 className="price">RS 500</h2>
            <Link to={`/car/${data.id}`} className="buy">
              View More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
