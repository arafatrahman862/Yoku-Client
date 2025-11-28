import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SingUp";
import Instructor from "../pages/Instructor";
import Class from "../pages/Class";

import DashBoard from "../pages/DashBoard";
import ManageUser from "../pages/ManagrUser";
import SelectedClass from "../pages/SelectedClass";
import AddClass from "../pages/AddClass";

import PrivateRoute from "../Routes/PrivateRoute";
import Error404 from "../pages/Error404";
import DashboardHome from "../pages/DashboardHome";


// Optional: Scroll to top on route change (smooth UX)
const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return null;
};


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Main />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/instructors", element: <Instructor /> },
      { path: "/classes", element: <Class /> },

      // Catch-all inside Main
      { path: "*", element: <Error404 /> },
    ],
  },

  // Dashboard Routes (Private)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      // Admin-only or normal routes
      { index: true, element: <DashboardHome /> },
      { path: "manageuser", element: <ManageUser /> },
      { path: "addclass", element: <AddClass /> },
      { path: "selectedclass", element: <SelectedClass /> },

      // Dashboard catch-all
      { path: "*", element: <Error404 /> },
    ],
  },
]);
