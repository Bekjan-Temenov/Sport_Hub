import { Outlet } from "react-router-dom";
import Home from "./ui/Home";

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