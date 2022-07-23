import React, { useState } from "react";
import "./infoModel.css";

const InfoModel = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [income, setIncome] = useState("");
  const [dealer, setDealer] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      name,
      address,
      email,
      phone,
      gender,
      income,
      carID: props.carID,
      dealer_id: dealer,
    });

    try {
      let res = await fetch(`${process.env.REACT_APP_ROOT_API}/customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      // console.log(name, address, email, phone, gender, income, dealer);
      let resJson = await res.json();
      if (resJson.status === 200) {
        setName("");
        setEmail("");
        setAddress("");
        setPhone("");
        setGender("");
        setIncome("");
        setDealer("");

        setMessage("Thanks For  Buying ❤️ ! Enjoy Ride");
        setTimeout(() => {
          setMessage("");
          window.location.pathname = "/";
        }, 1500);
      } else {
        setMessage(resJson.msg);
      }
    } catch (err) {
      setMessage(err.message);
    }
  };
  return (
    props.data && (
      <div
        className="modal fade"
        id="modalRegisterForm"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title text-center w-100 font-weight-bold">
                Fill Up Information
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
                      Address
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
                      Phone Number
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
                </div>
                <div className="col-md-6">
                  <div className="md-form m-1">
                    <i className="fas fa-envelope prefix grey-text mr-3"></i>
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="orangeForm-email"
                    >
                      Your email
                    </label>

                    <input
                      type="email"
                      id="orangeForm-email"
                      className="form-control validate"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="md-form" style={{ margin: "21px 0" }}>
                    <i className="fa-solid fa-user mr-1 mr3"></i>
                    <label data-error="wrong" data-success="right">
                      Gender
                    </label>

                    <select
                      data-error="Wromg"
                      data-success="Right"
                      className="form-select form-select-lg px-5 py-2 ml-2"
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="md-form m-1">
                    <i className="fa-solid fa-sack-dollar mr-3"></i>
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="orangeForm-income"
                    >
                      Income
                    </label>
                    <input
                      type="number"
                      max={10000000}
                      min={20000}
                      id="orangeForm-income"
                      className="form-control validate"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="md-form mt-3 mb-2 d-flex justify-content-center">
                <i className="fa-solid fa-handshake mt-4 mr-3"></i>
                <label data-error="wrong" data-success="right" className="mt-3">
                  Dealer
                </label>

                <select
                  data-error="Wromg"
                  data-success="Right"
                  className="form-select form-select-lg px-5 py-2 ml-3"
                  name="dealer_id"
                  value={dealer}
                  onChange={(e) => setDealer(e.target.value)}
                >
                  <option>Choose Dealer</option>
                  {props.data.map((el) => {
                    return (
                      <option value={el.id} key={Math.random()}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="md-form">
                <p className="text-center text-success">{message}</p>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-deep-orange">
                  Buy
                  <i className="fa-solid fa-cart-shopping mr-3"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};
export default InfoModel;
