import { Outlet } from "react-router-dom";
import Gym from "./ui/Gym/Gym";
import Section from "./ui/Section/Section";

export const AboutUsRoute = {
    path:"about_us",
    element:<Outlet/>,
    children : [
        {
            path:"gym",
            element:<Gym/>
        },
        {
            path:"section",
            element:<Section/>
        }
    ]
}