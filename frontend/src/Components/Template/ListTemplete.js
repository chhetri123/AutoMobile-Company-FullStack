import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
const ListTemplate = (props) => {
  const { pathname } = useLocation();
  return (
    props.data && (
      <div style={{ margin: "0px 3%", width: "auto", height: "100vh" }}>
        <Header headerName={props.title} />
        <hr className="text-bg-danger" />
        <div className="row justify-content-center">
          {props.data.length === 0 ? (
            <h6 className="text-center mt-5 text-danger">
              {props.title} Not Found
            </h6>
          ) : (
            <>
              <div className="col-md-1 mx-3"></div>
              <div className="col-md-10">
                <div className={`row ${!props.isTrue ? "right-list" : ""}`}>
                  {props.data.map((item, id) => (
                    <Card
                      data={item}
                      model={props.model}
                      isTrue={props.isTrue}
                      isCarFromModel={props.isCarFromModel}
                      key={item.name + item.id}
                      link={
                        props.fromBrand
                          ? `/brand/${item.id}/model`
                          : `${pathname}/${item.id}/car`
                      }
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default ListTemplate;
