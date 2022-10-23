import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Category from "../../components/Pages/Category/Category/Category";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login/Login";
import Register from "../../components/Pages/Login/Register/Register";
import News from "../../components/Pages/News/News/News";
import Profile from "../../components/Pages/Others/Profile/Profile";
import TermsAndConditions from "../../components/Pages/Others/TermsAndConditions/TermsAndConditions";
import Main from "../../layout/Main";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
            { path: '/', element: <Home />, loader: () => fetch('http://localhost:5000/news') },
            {
                path: '/category/:id', element: <Category />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id', element: <PrivetRoutes><News /></PrivetRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'terms', element: <TermsAndConditions /> },
            { path: 'profile', element: <PrivetRoutes><Profile /></PrivetRoutes> },
        ]
    }
])