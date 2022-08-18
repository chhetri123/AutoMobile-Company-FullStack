import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModelCard from "../../Template/ListTemplete";
const ModelList = (props) => {
  const { id } = useParams();
  const [models, setModels] = useState(null);
  const [brand, setBrand] = useState(null);
  useEffect(() => {
    if (id || props.isModel) {
      fetch(
        `${process.env.REACT_APP_ROOT_API}/${
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
      formBrand={false}
      title={!props.title ? `Models of Brand ${brand}` : props.title}
    />
  );
};
export default ModelList;
