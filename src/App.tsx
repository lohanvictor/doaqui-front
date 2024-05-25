import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { UserProvider } from "./context/useUser";
import { CartProvider } from "./context/useCart";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
