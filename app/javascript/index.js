import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import axios from "axios";

axios.defaults.headers.common["X-CSRF-Token"] = document.querySelector(
  'meta[name="csrf-token"]'
).content;


const root = ReactDOM.createRoot(document.getElementById("welcome"));
root.render(<App />);
