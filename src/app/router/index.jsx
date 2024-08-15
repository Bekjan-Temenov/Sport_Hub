import { useRoutes } from "react-router-dom";
import { zallyRoute } from "../../features/Zally/route";
import { ArenaRouter } from "../../features/Arena/route";
import { ReviewRoute } from "../../features/ReviewArena/route";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../features/Home/route";
import Home from "../../features/Home/ui/Home";
import AuthRouter from "../../features/Auth/route";


const MyRoutes = () => {
    return useRoutes([
        {
            path:"",
            element:<Layout/>,

            children: [{ path: '', element: <Home/> } ,HomeRoute ,  zallyRoute , ArenaRouter ,ReviewRoute],
        },
        AuthRouter
      
    ])
}
export default MyRoutes
