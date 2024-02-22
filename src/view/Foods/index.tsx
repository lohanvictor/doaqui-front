import { useNavigate } from "react-router-dom";
import { FoodsWrapper } from "./styles";
import { FoodCard } from "../../components/Cards/FoodCard";
import { useEffect, useState } from "react";
import { FoodResponse, FoodService } from "../../services/Foods.service";

export const FoodsView = () => {
  const [foods, setFoods] = useState<FoodResponse[]>([]);
  const navigate = useNavigate();
  function onRegisterFood() {
    navigate("/foods/register");
  }

  async function getAllFoods() {
    const allFoods = await FoodService.getFoods();
    setFoods(allFoods);
  }

  async function toggleFood(food: FoodResponse) {
    const formData = new FormData();
    formData.append("description", food.description);
    formData.append("name", food.name);
    formData.append("image", food.image!);
    formData.append("price", food.price.toString());
    formData.append("status_sale", String(!food.status_sale));
    formData.append("validity_str", food.validity.substring(0, 10));
    formData.append("_id", food._id!);
    await FoodService.updateFood(formData);
    getAllFoods();
  }

  useEffect(() => {
    getAllFoods();
  }, []);
  return (
    <FoodsWrapper>
      <div className="new-product-wrapper">
        <button onClick={onRegisterFood}>+ Adicionar comida para doar</button>
      </div>

      <div className="products">
        {...foods.map((food) => (
          <FoodCard
            description={food.description}
            title={food.name}
            imageUrl={`data:image/png;base64,${
              food.image as unknown as string
            }`}
            isSaled={food.status_sale}
            onClick={() => toggleFood(food)}
          />
        ))}
      </div>
    </FoodsWrapper>
  );
};
