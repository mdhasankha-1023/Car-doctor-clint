import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Others from "../Layout/Others";
import SignIn from "../Pages/SignIn/SignIn";
import Error from "../Pages/Error/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Orders from "../Pages/Orders/Orders";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/service-details',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/check-out/:id',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>,
                loader: () => fetch('http://localhost:5000/orders')
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