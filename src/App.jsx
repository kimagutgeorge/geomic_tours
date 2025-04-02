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


function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: "/about-us",
    element: <About/>,
    errorElement: <NotFound/>
  },
  {
    path: "/destinations",
    element: <DestinationPage/>,
    errorElement: <NotFound/>
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
