
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Imgdetails from '../pages/Imgdetails'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/gallerydetails/:id",
                element: <Imgdetails/>
            }
        ]
    },

])