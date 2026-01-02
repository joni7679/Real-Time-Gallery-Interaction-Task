
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ImgDetlist from "../pages/ImgDetlist";
import App from "../App";

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
                path: "/gallerydetlist",
                element: <ImgDetlist />
            }
        ]
    },

])