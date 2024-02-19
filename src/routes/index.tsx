import { createBrowserRouter } from "react-router-dom";
import { RootView } from "../view/Root";
import { HomeView } from "../view/Home";
import { LoginView } from "../view/Login";
import { RestaurantView } from "../view/Restaurant";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "home",
        element: <HomeView />,
      },
      {
        path: "restaurant",
        element: <RestaurantView />,
      },
    ],
  },
  {
    path: "/*",
  },
]);
