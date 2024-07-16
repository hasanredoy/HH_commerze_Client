import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserHome from "../pages/dashboard/user/UserHome/UserHome";
import Dashboard from "../Layout/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      
      {
        path:'/',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/userHome',
        element:<UserHome></UserHome>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
    ]
  },
]);
export default router;