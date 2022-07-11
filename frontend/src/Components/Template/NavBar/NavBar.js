import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
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
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brand">
                  Brand
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/model">
                  Model
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <button className="btn btn-default">User</button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
