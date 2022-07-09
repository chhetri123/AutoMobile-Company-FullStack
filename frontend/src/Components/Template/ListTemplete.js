import React from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import LeftCard from "./LeftCard";
const ListTemplate = (props) => {
  const { pathname } = useLocation();
  return (
    <div style={{ margin: "0px 3%", width: "auto" }}>
      <hr className="text-bg-danger" />
      <div className="row">
        <div className="col-md-2 left_list">
          <LeftCard msg={props.title} />
        </div>
        <div className="col-md-10">
          <div className={`row ${!props.isTrue ? "right-list" : ""}`}>
            {props.data.map((item, id) => (
              <Card
                data={item}
                isTrue={props.isTrue}
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
      </div>
    </div>
  );
};

export default ListTemplate;
