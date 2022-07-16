import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModelCard from "../../Template/ListTemplete";
const ModelList = (props) => {
  const { id } = useParams();
  // console.log(props, id);
  const [models, setModels] = useState([]);
  const [brand, setBrand] = useState("");
  useEffect(() => {
    if (id || props.isModel) {
      fetch(
        `http://localhost:3000/api/v1/${
          props.isModel ? "model" : `brand/${id}/models`
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setBrand(data.brand);
          setModels(data?.models || data.data);
        });
    }
  }, [id, props.isModel]);

  return (
    <ModelCard
      data={models}
      isTrue={true}
      title={!props.title ? `Models of Brand ${brand}` : props.title}
    />
  );
};
export default ModelList;
