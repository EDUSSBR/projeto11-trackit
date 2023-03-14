import { createBrowserRouter } from "react-router-dom";
import { HabitsPage } from "../pages/HabitsPage";
import { HistoryPage } from "../pages/HistoryPage";
import { HomePage } from "../pages/HomePage";
import { SignUpPage } from "../pages/SignUpPage";
import { TodaysHabitsPage } from "../pages/TodaysHabitsPage";
import { loader } from "./loaders";

export const router = createBrowserRouter([
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
        path: "/todayshabits",
        element: <TodaysHabitsPage />,
    }, {
        path: "/history",
        element: <HistoryPage />,
    },]);