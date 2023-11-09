import {createBrowserRouter} from "react-router-dom"
import Login from "../Pages/Login/Login"
import MainLayout from "../layout/MainLayout"
import { SideBar } from "../Home/SideBar";


export const routes = createBrowserRouter([
    {
     path: "/",
     element: <Login/>,
    },
    {
        path: "/logout",
        element: <Login/>,
    },
    {
        path: "/guest",
        element: <MainLayout/>,
        children: [
            {path: "",
            element: <SideBar/>}
        ]
    }
]);


    