import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import { HabitsPage } from "../pages/HabitsPage";
import { HistoryPage } from "../pages/HistoryPage";
import { HomePage } from "../pages/HomePage";
import { SignUpPage } from "../pages/SignUpPage";
import { TodaysHabitsPage } from "../pages/TodaysHabitsPage";
import { loader } from "./loaders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        loader,
        children: [
            {
                path: "/",
                element: <HomePage />,
            }, {
                path: "/signup",
                element: <SignUpPage />,
            }, {
                path: "/habits",
                element: <HabitsPage />,
            }, {
                path: "/",
                element: <TodaysHabitsPage />,
            }, {
                path: "/history",
                element: <HistoryPage />,
            },

        ],
    },
]


);