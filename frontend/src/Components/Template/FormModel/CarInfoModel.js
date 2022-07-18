import React from "react";
import { useState, useEffect } from "react";
import "./CarInfoModel.css";

const DataModel = () => {
  const [model, setModel] = useState([]);
  const [VIN, SetVIN] = useState("");
  const [name, SetName] = useState("");
  const [url, SetUrl] = useState("");
  const [modelId, SetModelId] = useState("");
  const [frontSus, SetFrontSus] = useState("");
  const [rearSus, SetRearSus] = useState("");
  const [frontBrake, SetFrontBrake] = useState("");
  const [rearBrake, SetRearBrake] = useState("");
  const [color, SetColor] = useState("");
  const [power, SetPower] = useState("");
  const [torque, SetTorque] = useState("");
  const [fuelType, SetFuelType] = useState("");
  const [speed, SetSpeed] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/model")
      .then((data) => data.json())
      .then((res) => {
        setModel(res.data);
      });
  }, [model]);

  const carHandler = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      car: {
        VIN,
        name,
        url,
        modelId,
      },
      engine: {
        power,
        torque,
        fuelType,
        speed,
      },
      specs: {
        frontSus,
        rearSus,
        frontBrake,
        rearBrake,
      },
      option: {
        color,
      },
    });

    fetch("http://localhost:3000/api/v1/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.status === 200) {
          setMessage("Car Added Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="modal fade"
      id="carModel"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl carModelDialog">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title text-center w-100 font-weight-bold">
              Add Car
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form className="p-1" onSubmit={carHandler}>
            <div className="row">
              <div className="col-md-4">
                <div className="md-form m-1">
                  <i className="fas fa-user prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-VIN"
                  >
                    Car VIN Number
                  </label>
                  <input
                    type="text"
                    min={0}
                    id={`orangeForm-VIN`}
                    value={VIN}
                    onChange={(e) => SetVIN(e.target.value)}
                    className="form-control validate w-70"
                  />
                </div>

                <div className="md-form m-1">
                  <i className="fas fa-location-arrow prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-name"
                  >
                    Car Name
                  </label>
                  <input
                    type="text"
                    min={0}
                    id={`orangeForm-name`}
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    className="form-control validate w-70"
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fas fa-mobile prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-url"
                  >
                    Car Image Url/Name
                  </label>
                  <input
                    type="text"
                    id={`orangeForm-url`}
                    value={url}
                    onChange={(e) => SetUrl(e.target.value)}
                    className="form-control validate w-70"
                  />
                </div>
                <div className="md-form" style={{ margin: "21px 0" }}>
                  <i className="fa-solid fa-user mr-1 mr3"></i>
                  <label data-error="wrong" data-success="right">
                    Car Model Name
                  </label>

                  <div>
                    <select
                      data-error="Wromg"
                      data-success="Right"
                      className="form-select form-select-lg px-5 py-2 ml-2"
                      name="modelName"
                      onChange={(e) => SetModelId(e.target.value)}
                    >
                      <option>Model</option>
                      {model.map((el) => (
                        <option value={el.id}>{el.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="md-form m-1">
                  <i className="fa-solid fa-sack-dollar mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-power"
                  >
                    Power
                  </label>
                  <input
                    type="text"
                    id="orangeForm-power"
                    value={power}
                    onChange={(e) => SetPower(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fa-solid fa-sack-dollar mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-Torque"
                  >
                    Torque
                  </label>
                  <input
                    type="text"
                    id="orangeForm-Torque"
                    value={torque}
                    onChange={(e) => SetTorque(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fa-solid fa-sack-dollar mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-fuelType"
                  >
                    Fuel Type
                  </label>
                  <input
                    type="text"
                    id="orangeForm-fuelType"
                    value={fuelType}
                    onChange={(e) => SetFuelType(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fa-solid fa-sack-dollar mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-spped"
                  >
                    Speed
                  </label>
                  <input
                    type="text"
                    id="orangeForm-speed"
                    value={speed}
                    onChange={(e) => SetSpeed(e.target.value)}
                    className="form-control validate"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="md-form m-1">
                  <i className="fa-solid fa-sack-dollar mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-frontSuspension"
                  >
                    Front Suspension
                  </label>
                  <input
                    type="text"
                    id="orangeForm-frontSuspension"
                    value={frontSus}
                    onChange={(e) => SetFrontSus(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fa-solid fa-sack-dollar mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-rearSuspension"
                  >
                    Rear Suspension
                  </label>
                  <input
                    type="text"
                    id="orangeForm-rearSuspension"
                    value={rearSus}
                    onChange={(e) => SetRearSus(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fa-solid fa-sack-dollar mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-frontTyre"
                  >
                    Front Brake
                  </label>
                  <input
                    type="text"
                    id="orangeForm-frontTyre"
                    value={frontBrake}
                    onChange={(e) => SetFrontBrake(e.target.value)}
                    className="form-control validate"
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fa-solid fa-sack-dollar mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-rearTyre"
                  >
                    Rear Brake
                  </label>
                  <input
                    type="text"
                    id="orangeForm-rearTyre"
                    value={rearBrake}
                    onChange={(e) => SetRearBrake(e.target.value)}
                    className="form-control validate"
                  />
                </div>
              </div>
            </div>
            <div className="md-form justify-content-center">
              <i className="fa-solid fa-handshake mr-3"></i>
              <label
                data-error="wrong"
                data-success="right"
                htmlFor="orangeForm-color"
              >
                Color
              </label>
              <div>
                <input
                  type="text"
                  id="orangeForm-color"
                  value={color}
                  onChange={(e) => SetColor(e.target.value)}
                  className="form-control validate w-25"
                />
              </div>
            </div>
            <p className="text-center text-success"> {message}</p>
            <div className="modal-footer d-flex mt-3 justify-content-center">
              <button className="btn btn-deep-orange">
                Add
                <i className="fa-solid fa-cart-shopping mr-3"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DataModel;
