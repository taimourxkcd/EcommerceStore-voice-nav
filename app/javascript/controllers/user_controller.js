import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from '../components/Welcome'

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("User controller Connnected")

    const e = React.createElement;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(e(Welcome), root );
  }
}