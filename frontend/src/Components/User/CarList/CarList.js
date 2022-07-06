import React from "react";
import CarCard from "./CarCard";
import LeftCard from "./LeftCard";
import "./CarList.css";
const CarList = () => {
  return (
    <div className="container">
      <h1 className="text-center text-info overflow-hidden p-3 mb-4">
        Car List
      </h1>
      <hr className="text-bg-danger" />
      <div className="row">
        <div className="col-md-2 left_list">
          <LeftCard />
        </div>
        <div className="col-md-10">
          <div className="row right_list">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8].map(
              (item) => (
                <CarCard />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
