import React from "react";

import ReactDOM from 'react-dom/client';





function App(){
     const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
//   return root.render(element);
    return <h2>It is {new Date().toLocaleTimeString()}.</h2>

}

export default App;