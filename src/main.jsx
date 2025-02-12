import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/RootRoute.jsx";
import { Toaster } from "sonner";
import TopToScroll from "./shared/TopToScroll.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
    <TopToScroll />
  </React.StrictMode>,
);
