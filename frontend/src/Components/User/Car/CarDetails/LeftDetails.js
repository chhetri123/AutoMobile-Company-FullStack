import React from "react";
import { Link, useLocation } from "react-router-dom";
import TableRow from "../../../Admin/Content/TableRow";
const LeftDetails = (props) => {
  const { pathname } = useLocation();
  return (
    <>
      {props.data.url && (
        <>
          <div className="media">
            <img
              src={`/images/${
                props.data.url
                  ? props.data?.url.replace(".png", ".jpg")
                  : "default.jpg"
              }`}
              alt={props.data.name}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <h3 className="mt-1 text-center">{props.data.name}</h3>
            <hr />
            <h4>Dealer</h4>
            <table className="text-center table table-sm table-striped">
              <tbody className="text-dark">
                {props.data.dealers.map((el) => (
                  <TableRow
                    fromUser={true}
                    data={Object.values(el)}
                    key={Math.random()}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-lg-4 my-5">
            <Link
              to={pathname}
              type="button"
              className="btn ms-xl-5 mx-5 btn-group btn-rounded"
            >
              Back
            </Link>
            <button
              className="btn btn-primary btn-rounded"
              data-toggle="modal"
              data-target="#modalRegisterForm"
            >
              Purchase
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default LeftDetails;
