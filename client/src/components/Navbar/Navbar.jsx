import { React, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assests/logo.png";
import menuline from "../../assests/menuline.svg";
import search from "../../assests/search.svg";
import Avatar from "./Avatar/Avatar";
import decode from "jwt-decode";
// import Button from './Button/Button'
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import LeftSidebar from "./LeftSidebar/LeftSidebar";

const Navbar = () => {
  var User = JSON.parse(localStorage.getItem("Profile"));
  console.log(User);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  return (
    <nav className="main-nav">
      <div className="Navbar">
        {/* <button className="nav-item nav-btn">
          <img
            src={menuline}
            alt="menuline"
            width={20}
            height={70}
            onClick={() => {
              setLeftbar(1);
            }}
          />
        </button> */}
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" width={120} height={70} />
        </Link>

        <Link className="nav-item nav-btn">ABOUT</Link>
        {/* <Link className="nav-item nav-btn">PRODUCTS</Link>
        <Link className="nav-item nav-btn">FOR TEAMS</Link> */}
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} className="searchIcon" alt="" width={18} />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log In
          </Link>
        ) : (
          <>
            <div className="loginAvatar">
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
            </div>
            {/* <i class="ri-menu-line"></i> */}
            <button className="nav-item nav-links" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
