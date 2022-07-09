import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../../../Template/ListTemplete";

import "./CarList.css";
const CarList = () => {
  let { id1, id } = useParams();
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/brand/${id1}/models/${id}/cars`)
      .then((res) => res.json())
      .then((data) => {
        setCarList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id1, id]);
  return <CarCard data={carList} isTrue={false} title="Car Lists " />;
};

export default CarList;
