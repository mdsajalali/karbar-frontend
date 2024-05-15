import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "./../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Kids from "../pages/Kids";
import Sports from "../pages/Sports";
import Beauty from "../pages/Beauty";

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
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/beauty",
        element: <Beauty />,
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
]);

export default router;
