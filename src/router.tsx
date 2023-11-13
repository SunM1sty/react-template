import {createBrowserRouter} from "react-router-dom";

import {App} from "./App";
import {ErrorPage} from './pages/ErrorPage';
import {AboutPageAsync} from "./pages/AboutPage";
import {HomePageAsync} from "./pages/HomePage";

export const router = createBrowserRouter([
    {
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'about',
                element: <AboutPageAsync />,
            },
            {
                path: '/',
                element: <HomePageAsync />
            }
        ]
    }
]);