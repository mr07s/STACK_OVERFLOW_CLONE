import React, { useState } from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../../assests/Globe.png";
import menuline from "../../../assests/menuline.svg";
import close from "../../../assests/close-large-fill.svg";
const LeftSidebar = () => {
  const [leftbar, setLeftbar] = useState(false);
  return (
    <>
      {!leftbar ? (
        <button className="menuline">
          <img
            src={menuline}
            alt="menuline"
            width={20}
            height={70}
            onClick={() => {
              setLeftbar(true);
            }}
          />
        </button>
      ) : (
        <>
          <button className="close">
            <img
              src={close}
              alt="menuline"
              width={20}
              height={70}
              onClick={() => {
                setLeftbar(false);
              }}
            />
          </button>
        </>
      )}
      {leftbar && (
        <div className="left-sidebar">
          <nav className="side-nav">
            <NavLink to="/" className="side-nav-links" activeClassName="active">
              <p>Home</p>
            </NavLink>
            <div className="side-nav-div">
              <div>
                <p>PUBLIC</p>
              </div>
              <NavLink
                to="/Questions"
                className="side-nav-links"
                activeClassName="active"
              >
                <img src={Globe} alt="Globe" />
                <p style={{ paddingLeft: "10px" }}>Questions</p>
              </NavLink>
              <NavLink
                to="/Tags"
                className="side-nav-links"
                activeClassName="active"
                style={{ paddingLeft: "40px" }}
              >
                <p>Tags</p>
              </NavLink>
              <NavLink
                to="/Users"
                className="side-nav-links"
                activeClassName="active"
                style={{ paddingLeft: "40px" }}
              >
                <p>Users</p>
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
