import { Navigate, createBrowserRouter } from "react-router-dom";
import AddBlog from "../dashboard/AddBlog";
import AddProduct from "../dashboard/AddProduct";
import Dashboard from "../dashboard/Dashboard";
import ListBlog from "../dashboard/ListBlog";
import ListProduct from "../dashboard/ListProduct";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductsCategory from "../shared/ProductsCategory";
import App from "./../App";
import Cart from "../pages/Cart";

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
        element: <Navigate to="addProduct" />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "listProduct",
        element: <ListProduct />,
      },
      {
        path: "addBlog",
        element: <AddBlog />,
      },
      {
        path: "listBlog",
        element: <ListBlog />,
      },
    ],
  },
]);

export default router;
