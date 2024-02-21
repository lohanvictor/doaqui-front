import { createBrowserRouter } from "react-router-dom";
import { RootView } from "../view/Root";
import { HomeView } from "../view/Home";
import { LoginView } from "../view/Login";
import { RestaurantView } from "../view/Restaurant";
import { AvailableFoodsView } from "../view/AvailableFoods";
import { RegisterView } from "../view/Register";
import { FoodsView } from "../view/Foods";
import { RegisterFoodView } from "../view/RegisterFood";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/register",
    element: <RegisterView />,
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
        path: "restaurant/:id",
        element: <AvailableFoodsView />,
      },
      {
        path: "restaurant",
        element: <RestaurantView />,
      },
      {
        path: "foods",
        element: <FoodsView />,
      },
      {
        path: "foods/register",
        element: <RegisterFoodView />,
      },
    ],
  },
  {
    path: "/*",
  },
]);
