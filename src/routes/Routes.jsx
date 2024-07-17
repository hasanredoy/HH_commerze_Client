import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserHome from "../pages/dashboard/user/UserHome/UserHome";
import Dashboard from "../Layout/Dashboard";
import SendMoney from "../pages/dashboard/user/sendMoney/SendMoney";
import AddMoney from "../pages/dashboard/user/addMoney/AddMoney";
import CashOut from "../pages/dashboard/user/CashOut/CashOut";
import BecomeAgent from "../pages/BecomeAgent/BecomeAgent";
import AgentHome from "../pages/dashboard/agent/AgentHome/AgentHome";

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
      {
        path:'addMoney',
        element:<AddMoney></AddMoney>
      },
      {
        path:'cashOut',
        element:<CashOut></CashOut>
      },
      {
        path:'sendMoney',
        element:<SendMoney></SendMoney>
      },
      // agent 
      {
        path:'becomeAgent',
        element:<BecomeAgent></BecomeAgent>
      },
      {
        path:'agentHome',
        element:<AgentHome></AgentHome>
      },
    ]
  },
]);
export default router;