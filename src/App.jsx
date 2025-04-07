import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // ✅ Only use this
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import DestinationPage from "./views/Destinations";
import Trips from "./views/Trips";
import Blogs from "./views/Blogs";
import Contacts from "./views/Contact";
import SingleDestination from "./views/SingleDestination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/destinations",
    element: <DestinationPage />,
  },
  {
    path: "/trips",
    element: <Trips/>
  },
  {
    path: "/destinations/:destination", 
    element: <SingleDestination />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    element: <Contacts />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {
  return null;
}

export default App;
