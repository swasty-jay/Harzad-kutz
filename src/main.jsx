// import { Children, StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // Children[
  //   // {
  //   //   path: "about",
  //   //   element: <About />,
  //   // }
  // ],
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
