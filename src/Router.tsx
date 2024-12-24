import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Routes} from "./routes/Routes";
import {Home} from "./components/home/Home";

export function Router() {
    const routes = [
        {
            path: Routes.HOME,
            element: <Home/>,
            children: []
        }
    ];

    const router = createBrowserRouter(routes);
    return <RouterProvider router={router}/>;
}