import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={props.isStyle ? { width: "85%" } : { width: "76%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img
              src="/images/logo.png"
              height="55"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {props.navItems.items.map((item) => (
                <li className="nav-item" key={Math.random()}>
                  <NavLink className="nav-link" to={item.link}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a href={props.navItems.link}>
              <button className="btn btn-default" style={{ fontWeight: "600" }}>
                {props.navItems.role}
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
