import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../features/Home/route";
import Home from "../../features/Home/ui/Home";
import { zallyRoute } from "../../features/Zally/route";

const MyRoutes = () => {
    return useRoutes([
        {
            path:"",
            element:<Layout/>,
            children: [{ path: '', element: <Home/> } ,HomeRoute ,  zallyRoute ],
        }
    ])
}
export default MyRoutes