import { useEffect, useMemo, useState } from "react";
import { FoodResponse, FoodService } from "../../services/Foods.service";
import { CartWrapper } from "./styles";
import { RestaurantFoodCard } from "../../components/Cards/RestaurantFoodCard";
import { useCart } from "../../context/useCart";
import { CartService } from "../../services/Cart.service";

export const CartView = () => {
  const [foods, setFoods] = useState<FoodResponse[]>([]);
  const { products, setDeliveryStatus, deliveryStatus, cartId } = useCart();

  const filteredFoods = useMemo(() => {
    const productsMapped = products.flatMap((prod) => prod.product_id);
    return foods.filter((food) => productsMapped.includes(food._id!));
  }, [foods, products]);

  async function getAllFoods() {
    const allFoods = await FoodService.getFoods();
    setFoods(allFoods);
  }

  async function finishCart() {
    const response = await CartService.finishCart(cartId, products);
    console.log(response);
    setDeliveryStatus(response.delivery_status!);
  }

  useEffect(() => {
    getAllFoods();
  }, []);

  const cartStatus = useMemo(() => {
    if (!deliveryStatus) return "Sem status";
    if (deliveryStatus === "in progress") return "Processando pedido";
    return "#";
  }, [deliveryStatus]);

  return (
    <CartWrapper>
      <header className="search-container">
        <span>Carrinho - {cartStatus}</span>

        <button onClick={finishCart}>Finalizar carrinho</button>
      </header>

      <div className="body">
        {...filteredFoods.map((food) => (
          <RestaurantFoodCard
            description={food.description}
            imageUrl={`data:image/png;base64,${
              food.image as unknown as string
            }`}
            title={food.name}
          />
        ))}
      </div>
    </CartWrapper>
  );
};
