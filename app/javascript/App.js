import React from "react";
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
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
