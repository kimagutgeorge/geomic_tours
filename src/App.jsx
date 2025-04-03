import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home"
import About from "./views/About";
import NotFound from "./views/NotFound";
import DestinationPage from "./views/Destinations";
import Trips from "./views/Trips";
import Blogs from "./views/Blogs";


function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: "/about-us",
    element: <About/>
  },
  {
    path: "/destinations",
    element: <DestinationPage/>
  },
  {
    path: "/trips",
    element: <Trips/>
  },
  {
    path: "/blogs",
    element: <Blogs/>
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

  return (
      <RouterProvider/>
  )
}

export default App
