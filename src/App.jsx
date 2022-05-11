import AppLayout from "./components/layouts/AppLayout"
import { appRoutes } from "./constants/appRoutes"
import { Route, Routes } from "react-router-dom"
import { appPaths } from "./constants/appPaths"

const App = () => {
    return (
        <Routes>
            <Route path={appPaths.MAIN} element={<AppLayout />}>
                {appRoutes.map((route) => (
                    <Route key={route.id} {...route} />
                ))}
            </Route>
        </Routes>
    )
}

export default App