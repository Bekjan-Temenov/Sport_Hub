import { useRoutes } from "react-router-dom";
import { zallyRoute } from "../../features/Zally/route";
import { ArenaRouter } from "../../features/Arena/route";
import { ReviewRoute } from "../../features/ReviewArena/route";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../features/Home/route";
import Home from "../../features/Home/index";
import AuthRouter from "../../features/Auth/route";
import AdminLayout from "../../widgets/Layout/AdminLayout";
import Adversting from "../../features/Adversting/index";
import { GymRoute } from "../../features/InfoGym/route";
import { AboutUsRoute } from "../../features/AboutUs/route";
import ReviewN from "../../features/Notification/ui/ReviewN";
import Paymentn from "../../features/Notification/ui/Paymentn";
import { MainAdversRoute } from "../../features/MainAdversting/route";

const MyRoutes = () => {
  return useRoutes([
    AuthRouter,
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        HomeRoute,
        zallyRoute,
        ArenaRouter,
        ReviewRoute,
        GymRoute,
        MainAdversRoute
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: <Adversting /> },
        AboutUsRoute,
        { path: "reviewn", element: <ReviewN /> },
        { path: "paymantn", element: <Paymentn /> },
      ],
    },
  ]);
};

export default MyRoutes;
