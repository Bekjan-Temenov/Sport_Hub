import { Outlet } from "react-router-dom";
import Payment from "./index";
import Card from "./ui/Card";
import Pay from "./ui/Pay";

export const PaymentRoute = {
  path: "",
  element: <Outlet />,
  children: [
    {
      path: "payment",
      element: <Payment />,
    },
    {
      path: "card",
      element: <Card />,
    },
    {
      path: "pay",
      element: <Pay />,
    },
  ],
};
