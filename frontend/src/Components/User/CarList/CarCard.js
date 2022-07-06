import React from "react";

const CarCard = () => {
  return (
    <div className="col-sm-3 my-2">
      <div className="itemBox">
        <div className="card">
          <div className="imgBox">
            <img src="./Images/Citroen-2-CV_1.png" alt="" />
          </div>
          <div className="contentBox">
            <h3>Brand</h3>
            <h3>Citroen 2 CV 0.6</h3>
            <h2 className="price">RS 500</h2>
            <a href="/info.html" className="buy">
              View More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
