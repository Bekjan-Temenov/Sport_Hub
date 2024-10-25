import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import AdminLayout from "../../widgets/Layout/AdminLayout";
import CustomerLayout from "../../widgets/Layout/CustomerLayout";
import Home from "../../features/Home/index";
import HomeRoute from "../../features/Home/route";
import { AboutUsRoute } from "../../features/AboutUs/route";
import ReviewN from "../../features/Notification/ui/ReviewN";
import Paymentn from "../../features/Notification/ui/Paymentn";
import AuthRouter from "../../features/Auth/route";
import Trainer from "../../features/User/ui/Trainer";
import Client from "../../features/User/ui/Client";
import { ArenaRouter } from "../../features/Arena/route";
import { zallyRoute } from "../../features/Zally/route";
import { ReviewRoute } from "../../features/ReviewArena/route";
import Adversting from "../../features/Adversting/index";
import { GymRoute } from "../../features/InfoGym/route";
import { MainAdversRoute } from "../../features/MainAdversting/route";
import Schedule from "../../features/Shedule/ui/Schedule";
import { PaymentRoute } from "../../features/Payment/route";
import { RouteProfile } from "../../features/Profile/route";
import { AttendenceRoute } from "../../features/Attendense/Route";

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
        MainAdversRoute,
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
        { path: "trainer", element: <Trainer /> },
        { path: "client", element: <Client /> },
      ],
    },
    {
      path: "/profile",
      element: <CustomerLayout />,
      children: [
        { path: "", element: <Schedule /> },
        PaymentRoute,
        RouteProfile,
        AttendenceRoute,
      ],
    },
  ]);
};
export default MyRoutes;
