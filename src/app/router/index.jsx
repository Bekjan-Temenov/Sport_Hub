import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../features/Home/route";
import Home from "../../features/Home/ui/Home";
import { zallyRoute } from "../../features/Zally/route";
import { ArenaRouter } from "../../features/Arena/route";
import { ReviewRoute } from "../../features/ReviewArena/route";

const MyRoutes = () => {
    return useRoutes([
        {
            path:"",
            element:<Layout/>,
            children: [{ path: '', element: <Home/> } ,HomeRoute ,  zallyRoute , ArenaRouter ,ReviewRoute],
        }
    ])
}
export default MyRoutes