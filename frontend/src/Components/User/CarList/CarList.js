import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import LeftCard from "./LeftCard";
import "./CarList.css";
const CarList = () => {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/car")
      .then((res) => res.json())
      .then((data) => {
        setCarList(data);
      });
  }, [carList]);
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
            {carList.map((item) => (
              <CarCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
