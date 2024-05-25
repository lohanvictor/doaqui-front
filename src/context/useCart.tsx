/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartService, ProductInCart } from "../services/Cart.service";

interface CartContextProps {
  products: ProductInCart[];
  updateCart(products: ProductInCart[]): void;
  setCartId(id: string): void;
  cartId: string;
  deliveryStatus: string;
  setDeliveryStatus: React.Dispatch<React.SetStateAction<string>>;
}

export const CartContext = createContext<CartContextProps | null>(null);
CartContext.displayName = "Cart";

const kCartId = "doaqui:cart-id";

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductInCart[]>([]);
  const [cartId, _setCartId] = useState<string>("");
  const [deliveryStatus, setDeliveryStatus] = useState<string>("");

  async function updateCart(newProds: ProductInCart[]) {
    const newProducts = await CartService.updateCart(cartId, newProds);
    setProducts(newProducts);
  }

  function setCartId(cartId: string) {
    _setCartId(cartId);
    localStorage.setItem(kCartId, cartId);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        setCartId,
        updateCart,
        cartId,
        deliveryStatus,
        setDeliveryStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const result = useContext(CartContext);
  return result!;
};
