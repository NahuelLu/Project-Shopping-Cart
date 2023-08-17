import '../styles/App.css';
import Homepage from "./Homepage";
import React from "react";
import Nav from "./Nav";
import Shop from "./Shop";
import Cart from './Cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Nav/>}>
    <Route path="/Homepage" element={<Homepage />} />
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="cart" element={<Cart />}></Route>
  </Route>
));
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false
      },
    },
  })
  return <QueryClientProvider client={queryClient}><div className="App"><RouterProvider router={router} /></div></QueryClientProvider>
}

export default App;
