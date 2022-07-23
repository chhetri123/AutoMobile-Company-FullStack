import React, { useEffect, useState } from "react";
import axios from "axios";
import "./infoModel.css";

const DealerModel = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [inventoryID, setInventoryID] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ROOT_API}/inventory`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setMessage(err.msg);
      });
  });
  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      name,
      address,
      phone,
      inventoryID,
    };
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_ROOT_API}/dealer`,
        data
      );

      if (res.status === 200) {
        setName("");
        setAddress("");
        setPhone("");

        setMessage("Dealer Successfully Added");
        setTimeout(() => {
          setMessage("");
          window.location.reload();
        }, 1500);
      } else {
        setMessage(res.msg);
      }
    } catch (err) {
      setMessage(err.message);
    }
  };
  return (
    <div
      className="modal fade"
      id="DealerModel"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title text-center w-100 font-weight-bold">
              Add Dealer
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
                    Dealer Name
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
                    Dealer Address
                  </label>
                  <input
                    type="text"
                    min={0}
                    id={`orangeForm-Address`}
                    className="form-control validate w-70"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="md-form m-1">
                  <i className="fas fa-mobile prefix grey-text mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-name"
                  >
                    Dealers Phone Number
                  </label>
                  <input
                    type="number"
                    min={0}
                    id={`orangeForm-number`}
                    className="form-control validate w-70"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="md-form mt-3 mb-2 d-flex justify-content-center">
                  <i className="fa-solid fa-handshake mt-4 mr-3"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    className="mt-3"
                  >
                    Select Inventory
                  </label>

                  <select
                    data-error="Wromg"
                    data-success="Right"
                    className="form-select form-select-lg px-5 py-2 ml-3"
                    name="dealer_id"
                    value={inventoryID}
                    onChange={(e) => setInventoryID(e.target.value)}
                  >
                    <option>Choose Dealer</option>
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
              <button className="btn btn-deep-orange">Add Dealer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DealerModel;
