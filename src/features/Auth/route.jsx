import { Outlet } from "react-router-dom";
import SignIn from "./ui/SignIn";
import SignUp from "./ui/SignUp";
import CodeInput from "./ui/CodeInput";
import RegisterRequired from "./ui/RegisterRequired";
import ForgotPassword from "./ui/ForgotPassword";
import RessetPassword from "./ui/RessetPassword";


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
        },
        {
            path: 'forgot',
            element:<ForgotPassword/>
        },
        {
            path: 'resetpassword',
            element:<RessetPassword/>
        }
    ]
}
export default AuthRouter