import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from './Components/Home/Home';
import About from './Components/About/About';
import Main from './Components/Layout/Main';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Bannar from './Components/Bannar/Bannar';
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Bannar></Bannar>,
      },
      {
        path:'/product',
        element:<Products></Products>,
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
