
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Item1 from "./pages/Item1";
import Item2 from "./pages/Item2";
import Item3 from "./pages/Item3";


const App = () => {
  return (
    <BrowserRouter>
        {/* Do not remove the main div */}
        
        
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/items/1" element={<Item1/>}/>
          <Route path="/items/2" element={<Item2/>}/>
          <Route path="/items/3" element={<Item3/>}/>
        </Routes>
        
    </BrowserRouter>
  )
}

export default App
