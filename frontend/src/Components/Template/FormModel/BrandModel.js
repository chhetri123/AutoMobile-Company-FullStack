import React, { useState } from "react";
import "./infoModel.css";

const BrandModel = () => {
  const [name, setName] = useState("");
  const [url, seturl] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      name,
      url,
    });

    try {
      let res = await fetch("http://localhost:3000/api/v1/brand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      let resJson = await res.json();
      if (resJson.status === 200) {
        setName("");
        seturl("");
        setTimeout(() => {
          setMessage("Brand Added Successfully");
          window.location.reload();
        }, 1500);
      } else {
        setMessage(resJson.msg);
      }
    } catch (err) {
      setMessage(err.message);
    }
  };
  return (
    <div
      className="modal fade"
      id="BrandModel"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title text-center w-100 font-weight-bold">
              Add Inventory
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
          <form className="p-1" onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="md-form m-1">
                  <i className="fas fa-user prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    min={0}
                    id={`orangeForm-Name`}
                    className="form-control validate w-70"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="md-form m-1">
                  <i className="fas fa-location-arrow prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-name"
                  >
                    url
                  </label>
                  <input
                    type="text"
                    min={0}
                    id={`orangeForm-url`}
                    className="form-control validate w-70"
                    value={url}
                    required
                    onChange={(e) => seturl(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="md-form">
              <p className="text-center text-success">{message}</p>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-deep-orange">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BrandModel;
