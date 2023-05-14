import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-lg mx-auto'>
    <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  </div>
)
