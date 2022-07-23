import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../../Template/Header";
import LeftDetails from "./LeftDetails";
import RightDetails from "./RightDetails";
import Model from "../../../Template/FormModel/InfoModel";

const CarDetails = () => {
  const { id, id1, id2 } = useParams();
  const [carDetails, setCarDetails] = useState({});
  // const [modelDetails, setModelDetails] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_ROOT_API}/brand/${id1}/models/${id}/cars/${id2}/details`
    )
      .then((res) => res.json())
      .then((data) => {
        setCarDetails(data[0]);
      })
      .catch((err) => console.log(err));
  }, [id2, id1, id]);

  return (
    <div className="container" style={{ width: "75%", color: "orangered" }}>
      <div className="container-sm">
        <hr />
        <Header headerName="Car Info" />
        <hr />
        <div className="row">
          <div className="col-md-5">
            <LeftDetails data={carDetails} />
          </div>
          <div className="col-md-7">
            <RightDetails data={carDetails} />
            <h3>
              Price : RS {carDetails?.price?.toLocaleString() || "200000"}
            </h3>
          </div>
        </div>
      </div>
      <Model data={carDetails.dealers} carID={id2} />
    </div>
  );
};

export default CarDetails;
