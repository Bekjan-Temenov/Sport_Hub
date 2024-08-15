import { Outlet } from "react-router-dom";
import Zally from "./ui/pages/Zally";
import InZally from "./ui/pages/InZally";

export const zallyRoute = {
    path:"/zally",
    element:<Outlet/>,
    children:[
        {
            path:"zally/:id",
            element:<Zally/>
        },
        {
            path:"in-zally",
            element:<InZally/>
        }
    ]
}