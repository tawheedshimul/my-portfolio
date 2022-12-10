import Main from "../../Layout/Main";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
           
           
        ]
    },

])

export default router;