import { useNavigate } from "react-router-dom";
import { FoodsWrapper } from "./styles";
import { FoodCard } from "../../components/Cards/FoodCard";

export const FoodsView = () => {
  const navigate = useNavigate();
  function onRegisterFood() {
    navigate("/foods/register");
  }
  return (
    <FoodsWrapper>
      <div className="new-product-wrapper">
        <button onClick={onRegisterFood}>+ Adicionar comida para doar</button>
      </div>

      <div className="products">
        <FoodCard
          description="Produto 1"
          title="Produto 1"
          imageUrl="https://media.istockphoto.com/id/1313384844/pt/foto/feijoada-a-typical-brazilian-food.jpg?s=612x612&w=0&k=20&c=zAzM-vuT1-E6asIEjZ2Tynj_IAHiKfQPb2gb9pffDZU="
          isSaled
        />
        <FoodCard
          description="Produto 2"
          title="Produto 1"
          imageUrl="https://media.istockphoto.com/id/1313384844/pt/foto/feijoada-a-typical-brazilian-food.jpg?s=612x612&w=0&k=20&c=zAzM-vuT1-E6asIEjZ2Tynj_IAHiKfQPb2gb9pffDZU="
        />
      </div>
    </FoodsWrapper>
  );
};
