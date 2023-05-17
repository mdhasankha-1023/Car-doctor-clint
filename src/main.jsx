import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-lg mx-auto'>
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
  </div>
)
