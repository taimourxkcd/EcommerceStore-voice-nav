import React, { useState, useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    registrationErrors: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // new state variable
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = (event) => {
    const { email, password } = userData;

    axios
      .post(
        "http://http://localhost:3000/api/v1/users",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          console.log("Registration data", response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });

    event.preventDefault();
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
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

              {isLoggedIn ? ( // show the "logged in successfully" flash message
                <div className="alert alert-success" role="alert">
                  Logged in successfully.
                </div>
              ) : (
                ""
              )}

              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    required
                    value={userData.email}
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
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

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
