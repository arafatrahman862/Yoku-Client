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
import ManagrUser from "../pages/ManagrUser";
import SelectedClass from "../pages/SelectedClass";
import AddClass from "../pages/AddClass";
import PrivateRoute from "../Routes/PrivateRoute";
import Error404 from "../pages/Error404";




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
        path:'*',
        element: <Error404></Error404>
      }
      
      
      
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:
    [
      {
        path: 'manageuser',
        element: <ManagrUser></ManagrUser>
      },
      {
        path: 'addclass',
        element:<AddClass></AddClass>
      },
      {
        path: 'selectedclass',
        element: <SelectedClass></SelectedClass>
      },
      {
        path:'*',
        element: <Error404></Error404>
      }
    ]
  }
]);