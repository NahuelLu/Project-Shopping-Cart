import Shop from "./Shop";
import Homepage from "./Homepage";
import React from "react";
import Nav from "./Nav";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const RouteSwitch = () => {
    return (
        <Route path="/" element={<Nav/>}>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
    );
  };
  
  export default RouteSwitch;