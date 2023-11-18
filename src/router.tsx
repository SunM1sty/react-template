import {createBrowserRouter} from "react-router-dom";

import {App} from "./App";
export const router = createBrowserRouter([
    {
        element: <App/>,
        path: '/',
        errorElement: <div>
            Error
        </div>,
        children: [
            {
                path: 'about',
                element: <div>
                    About page
                </div>,
            },
            {
                path: '/',
                element: <div>
                    Home page
                </div>
            }
        ]
    }
]);