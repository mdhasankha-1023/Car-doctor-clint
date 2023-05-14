import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    }
])

export default router;