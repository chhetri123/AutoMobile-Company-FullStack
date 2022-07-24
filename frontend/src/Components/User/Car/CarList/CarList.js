import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../../../Template/ListTemplete";
import axios from "axios";
import "./CarList.css";
const CarList = (props) => {
  let { id1, id } = useParams();
  const [carLists, setCarLists] = useState(null);
  const [model, setModel] = useState(null);
  useEffect(() => {
    if (props.isCarFromModel || id) {
      axios
        .get(
          `${process.env.REACT_APP_ROOT_API}/${
            props.isCarFromModel ? "" : `brand/${id1}/`
          }models/${id}/cars`
        )
        .then((res) => {
          setModel(res.data.model);
          setCarLists(res.data.car);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id1, id, props.isCarFromModel]);
  return (
    <CarCard
      data={carLists}
      isTrue={false}
      model={model}
      title={`Car Lists of Model ${model}`}
      isCarFromModel={props.isCarFromModel}
    />
  );
};

export default CarList;
