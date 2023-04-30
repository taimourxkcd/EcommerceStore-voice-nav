import React, { useState } from "react";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    errors: "",
  });

  const { name, email, phone, password, errors } = userData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/api/v1/users",
        {
          user: {
            name: name,
            email: email,
            phone: phone,
            password: password,
          },
        },
        { withCredentials: true}
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      setUserData({
        ...userData,
        errors: error.response.data.errors,
      });
    }
  };

  return (
    <>
      <Meta title={"SignUp"} />
      <BreadCrumb title="Sign up" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control"
                    value={phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
              {errors && <div className="error">{errors}</div>}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
