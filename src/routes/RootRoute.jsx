import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "./../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Women from "../pages/Women";

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
        path: "/women",
        element: <Women />,
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
