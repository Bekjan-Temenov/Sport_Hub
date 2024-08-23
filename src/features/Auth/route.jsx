import { Outlet } from "react-router-dom";
import SignIn from "./ui/SignIn";
import SignUp from "./ui/SignUp";
import CodeInput from "./ui/CodeInput";
import RegisterRequired from "./ui/RegisterRequired";

const AuthRouter ={
    path: "/auth",
    element:<Outlet/>,
    children:[
        {
            path:"sign-in",
            element:<SignIn/>
        },
        {
            path:"sign-up",
            element:<SignUp/>
        },
        {
            path:"code",
            element:<CodeInput/>
        },
        {
            path:"required",
            element:<RegisterRequired/>
        }
    ]
}
export default AuthRouter