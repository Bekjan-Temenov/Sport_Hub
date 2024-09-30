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
import CustomerLayout from "../../widgets/Layout/CustomerLayout";
import Schedule from "../../features/Shedule/ui/Schedule";
import { PaymentRoute } from "../../features/Payment/route";
import { RouteProfile } from "../../features/Profile/route";
import Trainer from "../../features/User/ui/Trainer";
import Client from "../../features/User/ui/Client";

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
         // Из ветки feature/main_adversting
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: <Adversting /> },
        AboutUsRoute, // Из ветки feature/main_adversting
        { path: "reviewn", element: <ReviewN /> },
        { path: "paymantn", element: <Paymentn /> }, // Объединение двух путей
        {path: "trainer", element: <Trainer/>},
        {path: "client", element: <Client/> },
        
      ],
    },
    {
      path: "/profile",
      element: <CustomerLayout />,
      children: [
        { path: "", element: <Schedule /> },
        PaymentRoute,
        RouteProfile,
      ],
    },
  ]);
};
export default MyRoutes;