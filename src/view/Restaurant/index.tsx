import { RestaurantWrapper } from "./styles";
import { Food, FoodResponse, FoodService } from "../../services/Foods.service";
import { useEffect, useState } from "react";
import { RestaurantFoodCard } from "../../components/Cards/RestaurantFoodCard";
import { useCart } from "../../context/useCart";

export const RestaurantView = () => {
  const [foods, setFoods] = useState<FoodResponse[]>([]);
  const { updateCart, products, cartId } = useCart();

  async function getAllFoods() {
    const allFoods = await FoodService.getFoods();
    setFoods(allFoods);
  }

  function updateCurrentCart(food: Food) {
    console.log({ food, cartId });
    const foodIndex = products.findIndex(
      (prod) => prod.product_id === food._id!
    );
    if (foodIndex === -1) {
      updateCart([...products, { product_id: food._id! }]);
    } else {
      const newProducts = [...products];
      newProducts.splice(foodIndex, 1);
      updateCart(newProducts);
    }
  }

  useEffect(() => {
    getAllFoods();
  }, []);

  return (
    <RestaurantWrapper>
      <header className="search-container">
        <span>Comidas disponiveis</span>
      </header>

      <div className="body">
        {...foods.map((food) => (
          <RestaurantFoodCard
            description={food.description}
            imageUrl={`data:image/png;base64,${
              food.image as unknown as string
            }`}
            title={food.name}
            onClick={() => updateCurrentCart(food)}
            selected={products.some((prod) => prod.product_id === food._id!)}
          />
        ))}
      </div>
    </RestaurantWrapper>
  );
};
