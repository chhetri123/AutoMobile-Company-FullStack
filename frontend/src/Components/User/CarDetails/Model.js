import React from "react";

const formData1 = [
  { name: "name", label: "Name", type: "text", icon: "user" },
  { name: "address", label: "Address", type: "text", icon: "location-arrow" },
  { name: "phone", label: "Phone", type: "number", icon: "mobile" },
];

const Model = () => {
  const formHtml = formData1.map((el) => (
    <div class="md-form m-1" key={el.name}>
      <i class="fas fa-user prefix grey-text"></i>
      <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">
        {el.label}
      </label>
      <input
        type={el.type}
        min={0}
        id={`orangeForm-${el.label}`}
        class="form-control validate w-70"
        name={el.name}
      />
    </div>
  ));
  return (
    <div
      class="modal fade"
      id="modalRegisterForm"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title text-center w-100 font-weight-bold">
              Fill Up Information
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form class="p-1">
            <div class="row">
              <div className="col-md-6">{formHtml}</div>
              <div class="col-md-6">
                <div class="md-form m-1">
                  <i class="fas fa-envelope prefix grey-text"></i>
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
                    class="form-control validate"
                    name="email"
                  />
                </div>
                <div class="md-form" style={{ margin: "21px 0" }}>
                  <i class="fa-solid fa-user mr-1"></i>
                  <label data-error="wrong" data-success="right">
                    Gender
                  </label>

                  <select
                    data-error="Wromg"
                    data-success="Right"
                    class="form-select form-select-lg px-5 py-2 ml-2"
                    name="gender"
                  >
                    <option>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="md-form m-1">
                  <i class="fa-solid fa-sack-dollar"></i>
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
                    class="form-control validate"
                    name="income"
                  />
                </div>
              </div>
            </div>
            <div class="md-form mt-3 mb-5 d-flex justify-content-center">
              <i class="fa-solid fa-handshake mt-4 mr-1"></i>
              <label data-error="wrong" data-success="right" class="mt-3">
                Dealer
              </label>

              <select
                data-error="Wromg"
                data-success="Right"
                class="form-select form-select-lg px-5 py-2 ml-3"
                name="dealer_id"
              >
                <option>Choose Dealer</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button class="btn btn-deep-orange">
                Buy
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Model;
