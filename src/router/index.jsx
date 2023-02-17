import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="Loading...">
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
