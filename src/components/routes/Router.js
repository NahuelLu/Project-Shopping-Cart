import {
    createBrowserRouter,
    Route,
    RouterProvider,
    createRoutesFromElements,
} from "react-router-dom";

import Nav from "../Nav"
import Shop from "../Shop";
import Cart from '../Cart';
import Homepage from "../Homepage";
import ProductDetails from "../ProductDetails"
import ShopLayout from "../ShopLayout.js"
const Router = ()=>{
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Nav/>}>
          <Route path="Homepage" element={<Homepage />}></Route>
          <Route path="shop" element={<ShopLayout />}>
            <Route index element={<Shop/>}></Route>
            <Route path=":bookId" element={<ProductDetails></ProductDetails>}></Route>
          </Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
    ));
    return <RouterProvider router={router} />
}

export default Router