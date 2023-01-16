import { Controller } from "@hotwired/stimulus"


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../components/App";
import MyButton from "../components/myButton";



// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React controller connected")

    const app = document.getElementById("app");
    ReactDOM.createRoot(app).render(<MyButton/>);
  }
}
