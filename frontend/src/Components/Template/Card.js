import React from "react";
import { Link, useLocation } from "react-router-dom";

const PurchaseStyle = {
  border: "1px solid red",
};
const Card = (props) => {
  const { pathname } = useLocation();
  return (
    <>
      {props.isTrue ? (
        <div
          className="card m-2 mx-3 align-items-center"
          style={{ width: "20%" }}
        >
          <Link to={props.link}>
            <img className="card-img-top p-1" src={props.data.url} alt="" />
            <div
              className="card-body"
              style={{ color: "black", fontWeight: "600" }}
            >
              <p className="card-text text-center">{props.data.name}</p>
            </div>
          </Link>
        </div>
      ) : (
        <div className="col-sm-3 my-2">
          <div className="itemBox">
            <div
              className="card1"
              style={props.data.customer_id ? PurchaseStyle : {}}
            >
              <div className="imgBox">
                <img
                  src={`${process.env.REACT_APP_ROOT_FILE_SERVER}/${props.data.url}`}
                  alt=""
                />
              </div>
              <div className="contentBox">
                <h3>{props.model}</h3>
                <h3>{props.data.name}</h3>
                <h2 className="price">
                  RS {props.data.price.toLocaleString()}
                </h2>
                <Link
                  to={
                    props.isCarFromModel
                      ? `/brand/5${pathname}/${props.data.id}/details`
                      : `${pathname}/${props.data.id}/details`
                  }
                  className="buy"
                >
                  View More Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
