import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
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
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
