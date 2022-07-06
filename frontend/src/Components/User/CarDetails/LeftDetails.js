import React from "react";
import TableRow from "../../Admin/Content/TableRow";

const LeftDetails = () => {
  return (
    <>
      <div className="media">
        <img
          src="https://www.auto-data.net/images/f73/DR-Automobiles-3_1.jpg"
          alt="..."
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <h3 className="mt-1 text-center">Car Name</h3>
        <hr />
        <h4>Dealer</h4>
        <table className="text-center table table-sm table-striped">
          <tbody>
            <TableRow fromUser={true} data={["Ram", "Hari"]} />
          </tbody>
        </table>
      </div>
      <div className="mt-lg-4 my-5">
        <a
          href="/carList.html"
          type="button"
          className="btn ms-xl-5 mx-5 btn-group btn-rounded"
        >
          Back
        </a>
        <button
          className="btn btn-primary btn-rounded"
          data-toggle="modal"
          data-target="#modalRegisterForm"
        >
          Purchase
        </button>
      </div>
    </>
  );
};
export default LeftDetails;
