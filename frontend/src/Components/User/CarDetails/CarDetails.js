import React from "react";
import Header from "../Header";
import LeftDetails from "./LeftDetails";
import RightDetails from "./RightDetails";
import Model from "./Model";
const carDetails = () => {
  return (
    <div className="container" style={{ width: "75%", color: "orangered" }}>
      <Header headerName="Auto Mobile Company" />
      <div class="container-sm">
        <hr />
        <Header headerName="Car Info" />
        <hr />
        <div className="row">
          <div className="col-md-4">
            <LeftDetails />
          </div>
          <div className="col-md-8">
            <RightDetails data={"someThing"} />
          </div>
        </div>
      </div>
      <Model />
    </div>
  );
};

export default carDetails;
