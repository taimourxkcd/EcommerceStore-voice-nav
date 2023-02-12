import React from "react";
import ReactDOM from "react-dom/client";

class Welcome extends React.Component {
  render(){
    return (
      <div> Welcome rendered in react </div>
    )
  }
}


const welcome = ReactDOM.createRoot(document.getElementById("welcome"))
welcome.render(<Welcome />);
