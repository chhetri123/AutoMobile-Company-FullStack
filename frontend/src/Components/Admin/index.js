import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Nabar/NavBar";
import Header from "./Header/Header";
import Content from "./Content/Content";

import InventoryInfoModel from "../Template/FormModel/InventoryInfoModel";
import DealerModel from "../Template/FormModel/DealerModel";
import CarInfoModel from "../Template/FormModel/CarInfoModel";
import BrandModel from "../Template/FormModel/BrandModel";
import ModelFormInfo from "../Template/FormModel/ModelInfoForm";

function DashBoard() {
  return (
    <div className="wrapper align-items-stretch">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/customer" element={<Content tableName={"customer"} />} />
        <Route
          path="/model"
          element={
            <Content
              tableName={"model"}
              modelId={"ModelFormInfo"}
              element={<ModelFormInfo />}
            />
          }
        />
        <Route
          path="/brand"
          element={
            <Content
              tableName={"brand"}
              modelId={"BrandModel"}
              element={<BrandModel />}
            />
          }
        />
        <Route
          path="/car"
          element={
            <Content
              tableName={"car"}
              modelId={"carModel"}
              element={<CarInfoModel />}
            />
          }
        />
        <Route
          path="/dealer"
          element={
            <Content
              tableName={"dealer"}
              modelId={"DealerModel"}
              element={<DealerModel />}
            />
          }
        />
        <Route
          path="/inventory"
          element={
            <Content
              tableName={"inventory"}
              modelId={"inventoryInfoModel"}
              element={<InventoryInfoModel />}
            />
          }
        />
        <Route path="/sales" element={<Content tableName={"sales"} />} />
      </Routes>
    </div>
  );
}

export default DashBoard;
