import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Routes} from "./routes/Routes";
import {Home} from "./components/home/Home";
import {OptionARoutes} from "./routes/OptionA";
import {OptionBRoutes} from "./routes/OptionB";

export function Router() {
    const routes = [
        {
            path: Routes.HOME,
            element: <Home/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                OptionARoutes,
                OptionBRoutes,
            ]
        },
    ];

    const router = createBrowserRouter(routes);
    return <RouterProvider router={router}/>;
}