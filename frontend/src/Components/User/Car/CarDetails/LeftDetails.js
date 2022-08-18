import React from "react";
import { useLocation } from "react-router-dom";
import TableRow from "../../../Admin/Content/TableRow";
const LeftDetails = (props) => {
  const { pathname } = useLocation();
  const backLocation = pathname.split("/").slice(0, 6).join("/");
  return (
    <>
      {props.data.url && (
        <>
          <div className="media">
            <img
              src={`${process.env.REACT_APP_ROOT_FILE_SERVER}/cars/${props.data.url}`}
              alt={props.data.name}
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "black 0px 0px 6px 0px",
              }}
            />
          </div>
          <hr />
          <div>
            <h3 className="mt-1 text-center" style={{ fontSize: "1.2em" }}>
              {props.data.name}
            </h3>
            <hr />
            <h4>Dealer</h4>
            <table className="text-center table table table-striped">
              <tbody className="text-dark">
                {props.data.dealers.map((el) => (
                  <TableRow
                    fromUser={true}
                    data={Object.values(el).slice(1, 4)}
                    key={Math.random()}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-lg-4 my-5">
            <a
              href={backLocation}
              type="button"
              className="btn ms-xl-5 mx-5 btn-group btn-rounded"
            >
              Back
            </a>
            {!props.data.customer_id ? (
              <button
                className="btn btn-primary btn-rounded"
                data-toggle="modal"
                data-target="#modalRegisterForm"
              >
                Purchase
              </button>
            ) : (
              <button className="btn btn-rounded">Sold out</button>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default LeftDetails;
