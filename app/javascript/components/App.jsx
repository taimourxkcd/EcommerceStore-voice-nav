import React from "react";

import ReactDOM from 'react-dom/client';
import "./App.css"


// function App(){
//      const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// //   return root.render(element);
//     return <h2>It is {new Date().toLocaleTimeString()}.</h2>

// }

// export default App;

/**
 * Destructuring in React
 *
 * URL: https://github.com/learning-zone/react-interview-questions#-1-introduction
 */

export default function App() {
  const [counter, setcounter] = React.useState(0);

  return (
    <>
      <button onClick={() => setcounter(counter + 1)}> Increment </button>
      <button onClick={() => setcounter(counter > 0 ? counter - 1 : 0)}>
        Decrement
      </button>

      <h2 className="App">Result: {counter}</h2>
    </>
  );
}
