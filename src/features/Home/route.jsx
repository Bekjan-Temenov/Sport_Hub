import { Outlet } from "react-router-dom";
import Home from "./index";

const HomeRoute = {
  path: "",
  element: <Outlet />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default HomeRoute;