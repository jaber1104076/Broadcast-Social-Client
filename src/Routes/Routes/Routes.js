import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import DetailPost from "../../Pages/DetailPost/DetailPost";
import Home from "../../Pages/Home/Home/Home";
import Media from "../../Pages/Media/Media";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../../Pages/Shared/Login/Login";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import PrivateRout from "../PrivateRoute/PrivateRout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/media',
                element: <PrivateRout><Media></Media></PrivateRout>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/mediaDetail/:id',
                element: <DetailPost></DetailPost>,
                loader: ({ params }) => fetch(`https://social-media-platform-server-five.vercel.app/myMedia/${params.id}`)
            }
        ]
    }
])