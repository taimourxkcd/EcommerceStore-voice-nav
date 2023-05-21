import "regenerator-runtime/runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import OurStore from "./src/pages/OurStore";
import Layout from "./src/components/Layout";
import Blog from "./src/pages/Blog";
import CompareProduct from "./src/pages/CompareProduct";
import Wishlist from "./src/pages/Wishlist";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Resetpassword from "./src/pages/Resetpassword";
import ForgotPassword from "./src/pages/ForgotPassword";
import SingleBlog from "./src/pages/SingleBlog";
import RefundPolicy from "./src/pages/RefundPolicy";
import PrivacyPolicy from "./src/pages/PrivacyPolicy";
import ShippingPolicy from "./src/pages/ShippingPolicy";
import TermsAndConditions from "./src/pages/TermsAndConditions";
import SingleProduct from "./src/pages/SingleProduct";
import SearchProduct from "./src/pages/SearchProduct";
import Cart from "./src/pages/Cart";
import Checkout from "./src/pages/Checkout";


import axios from "axios";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  

  useEffect(() => {
    loginStatus();
  }, []);

  const loginStatus = () => {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurStore />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="searchproduct" element={<SearchProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<Resetpassword />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="term-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
