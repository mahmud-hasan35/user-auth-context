import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Order from "../pages/Order";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/orders',
                element: <PrivateRouts>
                    <Order/>
                </PrivateRouts>
            },
        ]
    }
]);
export { router }