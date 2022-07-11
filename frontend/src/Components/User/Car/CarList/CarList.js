import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../../../Template/ListTemplete";

import "./CarList.css";
const CarList = (props) => {
  let { id1, id } = useParams();
  const [carList, setCarList] = useState([]);
  const [model, setModel] = useState("");
  useEffect(() => {
    if (props.isCarFromModel || id) {
      fetch(
        `http://localhost:3000/api/v1/${
          props.isCarFromModel ? "" : `brand/${id1}/`
        }models/${id}/cars`
      )
        .then((res) => res.json())
        .then((data) => {
          setModel(data.model);
          setCarList(data.car);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id1, id, props.isCarFromModel]);
  return (
    <CarCard
      data={carList}
      isTrue={false}
      title={`Car Lists of Model ${model}`}
      isCarFromModel={props.isCarFromModel}
    />
  );
};

export default CarList;
