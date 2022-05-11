import Statistic from "../pages/Statistic";
import Redirect from "../pages/Redirect";
import { appPaths } from "./appPaths";
import Error from "../pages/Error";

export const appRoutes = [
    {
        id: 1,
        index: true,
        element: <Statistic/>,
        path: appPaths.MAIN
    },
    {
        id: 2,
        element: <Error/>,
        path: appPaths.ERROR
    },
    {
        id: 3,
        element: <Redirect/>,
        path: appPaths.REDIRECT
    }
]