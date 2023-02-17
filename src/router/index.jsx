import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
