import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Property from "../pages/Property/Property";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/property",
        element: <Property></Property>,
      },
      {
        path: "/property-details",
        element: <PropertyDetails></PropertyDetails>,
      },
    ],
  },
]);

export default router;
