import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home/Home.jsx";
import Main from "../layout/Main.jsx";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Checkout from "../pages/Checkout/Checkout.jsx";
import Bookings from "../pages/Bookings/Bookings.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "checkout/:id",
          element: <Checkout></Checkout>,
          loader: ({params})=> fetch (`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "bookings",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
