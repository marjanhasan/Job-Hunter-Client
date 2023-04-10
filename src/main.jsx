import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrrorPage from "./Components/ErrrorPage";
import Home from "./Components/Home";
import Statistic from "./Components/Statistic";
import AppliedJob from "./Components/AppliedJob";
import Blog from "./Components/Blog";
import JobDetails from "./Components/JobDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/jobsDetails.json"),
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails />,
      },
      {
        path: "statistic",
        element: <Statistic />,
      },
      {
        path: "appliedjobs",
        element: <AppliedJob />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
