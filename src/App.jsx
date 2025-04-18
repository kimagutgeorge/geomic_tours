import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import DestinationPage from "./views/Destinations";
import Trips from "./views/Trips";
import Blogs from "./views/Blogs";
import Contacts from "./views/Contact";
import SingleDestination from "./views/SingleDestination";
import SingleTrip from "./views/SingleTrip";
import SingleBlog from "./views/SingleBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/about-us",
    element: <About />,
    errorElement: <NotFound />
  },
  {
    path: "/destinations",
    element: <DestinationPage />,
    errorElement: <NotFound />
  },
  {
    path: "/trips",
    element: <Trips/>,
    errorElement: <NotFound />
  },
  {
    path: "/destination/:destination", 
    element: <SingleDestination />,
    errorElement: <NotFound />
  },
  {
    path: "/blogs",
    element: <Blogs />,
    errorElement: <NotFound />
  },
  {
    path: "/contact-us",
    element: <Contacts />,
    errorElement: <NotFound />
  },
  {
    path: "/trip/:trip",
    element: <SingleTrip/>,
    errorElement: <NotFound />
  },
  {
    path: "/blog/:blog",
    element: <SingleBlog/>,
    errorElement: <NotFound />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
