import React, { useEffect, useState } from "react";
import "./infoModel.css";

const ModelFormInfo = (props) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [year, setYear] = useState("");
  const [brand_id, setBrandID] = useState("");
  const [bodyStyle, setBodyStyle] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/brand")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setMessage(err.msg);
      });
  });
  const submitForm = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      name,
      url,
      brand_id,
      year,
      bodyStyle,
    });
    try {
      let res = await fetch("http://localhost:3000/api/v1/model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      // console.log(name, url, email, year, gender, income, dealer);
      let resJson = await res.json();
      if (resJson.status === 200) {
        setName("");
        setUrl("");
        setYear("");

        setMessage("Thanks for Buying 😊");
        setTimeout(() => {
          setMessage("");
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
      id="ModelFormInfo"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title text-center w-100 font-weight-bold">
              Add Model
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
                    Model Name
                  </label>
                  <input
                    type="text"
                    id={`orangeForm-Name`}
                    className="form-control validate w-70"
                    value={name}
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
                    Model Image/ Url
                  </label>
                  <input
                    type="text"
                    min={0}
                    id={`orangeForm-Address`}
                    className="form-control validate w-70"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fas fa-mobile prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-number"
                  >
                    Model Year
                  </label>
                  <input
                    type="text"
                    id={`orangeForm-number`}
                    className="form-control validate w-70"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fas fa-mobile prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-BodyStyle"
                  >
                    Model Body Style
                  </label>
                  <input
                    type="text"
                    id={`orangeForm-BodyStyle`}
                    className="form-control validate w-70"
                    value={bodyStyle}
                    onChange={(e) => setBodyStyle(e.target.value)}
                  />
                </div>
                <div className="md-form mt-3 mb-2 d-flex justify-content-center">
                  <i className="fa-solid fa-handshake mt-4 mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    className="mt-3"
                  >
                    Select Brand
                  </label>

                  <select
                    data-error="Wromg"
                    data-success="Right"
                    className="form-select form-select-lg px-5 py-2 ml-3"
                    name="dealer_id"
                    value={brand_id}
                    onChange={(e) => setBrandID(e.target.value)}
                  >
                    <option>Choose Brand</option>
                    {data.map((el) => {
                      return (
                        <option value={el.id} key={Math.random()}>
                          {el.name}
                        </option>
                      );
                    })}
                  </select>
                </div>{" "}
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
export default ModelFormInfo;
