import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModelCard from "../../Template/ListTemplete";
const ModelList = () => {
  const { id } = useParams();
  const [models, setModels] = useState([]);
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/v1/brand/${id}/models`)
        .then((res) => res.json())
        .then((data) => {
          setModels(data);
        });
    }
  }, [id]);

  return <ModelCard data={models} isTrue={true} />;
};
export default ModelList;
