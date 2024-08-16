import { Outlet } from "react-router-dom";
import Zally from "./ui/pages/Zally";
import InZally from "./ui/pages/InZally";
import InKrugok from "./ui/pages/InKrugok";

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
        },
        {
            path:"in-krugok",
            element:<InKrugok/>
        }
    ]
}