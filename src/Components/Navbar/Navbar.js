import React from "react";
import "./Navbar.css";
import { AiFillPlayCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav
          className="navbar navbar-expand-lg navbar-light  bg-white"
          style={{ height: "52px" }}
        >
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#ffffff",
              borderBottom: "1px solid #eaeaea",
            }}
          >
            <div className="navbar-brand" href="/">
              <b>Edvolve</b>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div
                    className="nav-a active hover-underline-animation"
                    aria-current="page"
                    href="/"
                  >
                    <b>Dashboard</b>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-a active hover-underline-animation mx-3">
                    <b>Experience Zone</b>{" "}
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-a active hover-underline-animation mx-3">
                    <b>Learning zone</b>{" "}
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-a hover-underline-animation"
                    href="/Aboutme"
                  >
                    {" "}
                    <b>About Me</b>{" "}
                  </div>
                </li>
              </ul>
              <div className="navbar-text d-flex justify-content-between">
                <div href="/Login" style={{ marginRight: "10px" }}>
                  <button
                    type="button"
                    className=" btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <AiFillPlayCircle className="mb-1 mx-1" />
                    Discovery Zone
                  </button>
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <div href="/UserDetails">
                      <i
                        className="fa fa-user-circle-o"
                        style={{
                          fontSize: "24px",
                          marginTop: "10px",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                      ></i>
                      <b className="my-2">Harshita Shukla</b>
                    </div>
                  </li>
                </ul>

                <button
                  type="button"
                  className="btn-login  btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
