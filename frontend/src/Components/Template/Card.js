import React from "react";
import { Link, useLocation } from "react-router-dom";
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
            <div className="card1">
              <div className="imgBox">
                <img src={`/images/${props.data.url}`} alt="" />
              </div>
              <div className="contentBox">
                <h3>Brand</h3>
                <h3>{props.data.name}</h3>
                <h2 className="price">RS 500</h2>
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
