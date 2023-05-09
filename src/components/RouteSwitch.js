import Shop from "./Shop";
import Homepage from "./Homepage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteSwitch = ({children}) => {
    return (
      <BrowserRouter>
        {children}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;