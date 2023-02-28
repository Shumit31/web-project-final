import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import DashboardLayout from './../../Layout/DashboardLayout';
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddSpecialist from './../../Pages/DashBoard/AddSpecialist/AddSpecialist';
import ManageSpecialists from './../../Pages/DashBoard/ManageSpecialists/ManageSpecialists';
import Payment from "../../Pages/DashBoard/Payment/Payment";
import DisplayError from './../../Pages/Shared/DisplayError/DisplayError';


const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/appointment',
                element:<Appointment/>
            },
            
        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
              path:'/dashboard',
              element:<MyAppointment></MyAppointment> 
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/addspecialists',
                element:<AdminRoute><AddSpecialist></AddSpecialist></AdminRoute>
            },
            {
                path:'/dashboard/managespecialists',
                element:<AdminRoute><ManageSpecialists></ManageSpecialists></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
            },
          
           
        ]
    }
    
])
export default router;