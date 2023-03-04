import React  from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./src/pages/Home"
import About from "./src/pages/About"
import Contact from "./src/pages/Contact";
import OurStore from "./src/pages/OurStore";
import Layout from "./src/components/Layout";
import Blog from "./src/pages/Blog";
import CompareProduct from "./src/pages/CompareProduct";


const App = () => {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="store" element={<OurStore/>}/>
            <Route path="blogs" element={<Blog/>}/>
            <Route path="compare-product" element={<CompareProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
