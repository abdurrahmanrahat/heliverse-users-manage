import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/team",
    element: <Team></Team>
  }
]);

export default router;
