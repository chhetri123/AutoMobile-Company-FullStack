import React, { useState, useEffect } from "react";
// import ReactHtmlParser from "react-html-parser";
import "./SideBar.css";
import NavList from "./NavList";
const SideBar = () => {
  const [toggle, setToggle] = useState("");
  const [wrapper, setWrapper] = useState("48%");
  useEffect(() => {
    setWrapper(toggle !== "active" ? "24%" : "5%");
    document.querySelector(".wrappers").style.width = wrapper;
  }, [toggle, wrapper]);
  return (
    <div
      className="wrappers  align-items-stretch position-sticky d-flex"
      style={{ height: "120vh", postion: "sticky", overflow: "hidden" }}
    >
      <nav id="sidebar" className={toggle}>
        <div className="custom-menu">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-primary"
            onClick={() => setToggle(toggle !== "active" ? "active" : "")}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className="p-4">
          <h1>
            <a
              href="index.html"
              className="logo p-0"
              style={{ fontSize: "25px", margin: "0" }}
            >
              Admin
              <p style={{ fontSize: "25px", marginTop: "-10px" }}>DashBoard</p>
            </a>
          </h1>
          <ul className="list-unstyled components mb-5">
            {["Customer", "Car", "Model", "Brand", "Dealer"].map((el) => (
              <NavList title={el} key={el} />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
