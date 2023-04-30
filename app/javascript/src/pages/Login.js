import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    errors: "",
  });

  const { email, password, errors } = userData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    axios
      .post(
        "http://localhost:3000/login",
        { user: user },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          setUserData({
            email: response.data.user.email,
            password: "",
            errors: "",
          });
          localStorage.setItem("token", response.data.token); // store token in localStorage
          console.log(
            "Token stored in localStorage:",
            localStorage.getItem("token")
          );
          // navigate.push("/"); // Use history.push instead of window.location.href
        } else {
          setUserData({
            ...userData,
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>

              <form
                action="/login"
                className="d-flex flex-column gap-15"
                onSubmit={handleSubmit}
                method="post"
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    required
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    required
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  {errors && <p className="text-danger">{errors}</p>}
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      Sign up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
