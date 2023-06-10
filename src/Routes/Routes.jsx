import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Instructor from "../pages/Instructor";
import Class from "../pages/Class";
import DashBoard from "../pages/DashBoard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <SingUp></SingUp>
      },
      {
        path: '/instructors',
        element: <Instructor></Instructor>
      },
      {
        path: '/classes',
        element: <Class></Class>
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
      
    ]
  },
]);