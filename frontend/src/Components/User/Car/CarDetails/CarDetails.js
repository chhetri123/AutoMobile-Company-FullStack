import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../Header";
import LeftDetails from "./LeftDetails";
import RightDetails from "./RightDetails";
import Model from "./Model";

const CarDetails = () => {
  const { id, id1, id2 } = useParams();
  const [carDetails, setCarDetails] = useState({});
  // const [modelDetails, setModelDetails] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/v1/brand/${id1}/models/${id}/cars/${id2}/details`
    )
      .then((res) => res.json())
      .then((data) => {
        setCarDetails(data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container" style={{ width: "75%", color: "orangered" }}>
      <Header headerName="Auto Mobile Company" />
      <div className="container-sm">
        <hr />
        <Header headerName="Car Info" />
        <hr />
        <div className="row">
          <div className="col-md-4">
            <LeftDetails data={carDetails} />
          </div>
          <div className="col-md-8">
            <RightDetails data={carDetails} />
          </div>
        </div>
      </div>
      <Model />
    </div>
  );
};

export default CarDetails;