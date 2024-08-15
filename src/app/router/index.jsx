import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../features/Home/route";
import Home from "../../features/Home/ui/Home";
import SignUpRoute from "../../features/Auth/SignUp/route";
import { zallyRoute } from "../../features/Zally/route";

import { ArenaRouter } from "../../features/Arena/route";
import { ReviewRoute } from "../../features/ReviewArena/route";

import CodeInputRoute from "../../features/Auth/CodeInput/route"
import RegisterReqRoute from "../../features/Auth/RegistrationRequiredAd/router/router";
import signInRoute from "../../features/Auth/SignIn/router/router";
import forgotPasswordRoute from "../../features/Auth/ForgotPassword/router/route";


const MyRoutes = () => {
    return useRoutes([
        {
            path:"",
            element:<Layout/>,

            children: [{ path: '', element: <Home/> } ,HomeRoute ,  zallyRoute , ArenaRouter ,ReviewRoute],
        },
       SignUpRoute,
        CodeInputRoute,
        RegisterReqRoute,
        signInRoute,
     forgotPasswordRoute
    ])
}
export default MyRoutes