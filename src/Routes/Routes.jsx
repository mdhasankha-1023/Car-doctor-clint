import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Others from "../Layout/Others";
import SignIn from "../Pages/SignIn/SignIn";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/',
        element: <Others></Others>,
        children: [
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: 'sign-in',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router;