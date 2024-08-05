import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../features/Home/route";
import Home from "../../features/Home/ui/Home";
import SignUpRoute from "../../features/Auth/SignUp/route";
import { zallyRoute } from "../../features/Zally/route";
import CodeInputRoute from "../../features/Auth/CodeInput/route"


const MyRoutes = () => {
    return useRoutes([
        {
            path:"",
            element:<Layout/>,

            children: [{ path: '', element: <Home/> } ,HomeRoute , zallyRoute  ],
        },
       SignUpRoute,
     CodeInputRoute
    ])
}
export default MyRoutes