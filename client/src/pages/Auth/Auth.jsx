import React, { useState } from "react";
import "./Auth.css";
import favicon from "../../assests/favicon.ico";
import { signup, login } from "../../actions/auth";
import AboutAuth from "./AboutAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Navbar/Loader/loader";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      signup({ name, email, password }, navigate).then((res) => {
        console.log(res.json());
        setLoading(res);
      });
      console.log("Hii");
    } else {
      dispatch(login({ email, password }, navigate)).then((res) => {
        console.log(res);
        setLoading(res);
      });
      console.log("Hii");
    }
  };

  return !loading ? (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img
            src={favicon}
            alt="stack overflow"
            className="login-logo"
            width={30}
            height={30}
          />
        )}

        <form onSubmit={handelSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                autocomplete="username"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}

          <label htmlFor="">
            <h4>Email</h4>
            <input
              type="email"
              autocomplete="username"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label htmlFor="">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "0.75" }}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              autocomplete="current-password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{ fontSize: ".75rem" }}>
                Passwords must contain at least eight <br />
                characters, including at least 1 <br /> letter and 1 number.
              </p>
            )}
          </label>

          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: ".75rem" }}>
                pt-in to receive occasional <br /> product updates, user
                research invitations, <br /> company announcements, and digests.
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>

          {isSignup && (
            <p style={{ color: "#666767", fontSize: ".75rem" }}>
              By clicking “Sign up”, you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of <br /> service{" "}
              </span>
              ,<span style={{ color: "#007ac6" }}>privacy policy</span>
              and
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>

        <p>
          {isSignup ? "already have an account" : "Don't have an account ? "}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handelSwitch}
          >
            {isSignup ? " Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  ) : (
    <div className="auth-section">
      <Loader />
    </div>
  );
};

export default Auth;
