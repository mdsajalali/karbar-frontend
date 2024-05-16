import { Navigate, createBrowserRouter } from "react-router-dom";
import AddProduct from "../dashboard/AddProduct";
import Dashboard from "../dashboard/Dashboard";
import ListProduct from "../dashboard/ListProduct";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductsCategory from "../shared/ProductsCategory";
import App from "./../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/men",
        element: <ProductsCategory name="Men" />,
      },
      {
        path: "/women",
        element: <ProductsCategory name="Women" />,
      },
      {
        path: "/kids",
        element: <ProductsCategory name="Kids" />,
      },
      {
        path: "/sports",
        element: <ProductsCategory name="Sports" />,
      },
      {
        path: "/beauty",
        element: <ProductsCategory name="Beauty" />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
       {
          path: "",
          element: <Navigate to="addproduct" />
       },
       {
        path: "addproduct",
        element: <AddProduct />
       },
       {
        path: "listproduct",
        element: <ListProduct />
       }
    ],
  },
]);

export default router;
