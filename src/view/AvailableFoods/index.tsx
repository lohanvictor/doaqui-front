import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AvailablerFoodsWrapper } from "./styles";
import { useEffect } from "react";
import { RestaurantFoodCard } from "../../components/Cards/RestaurantFoodCard";

export const AvailableFoodsView = () => {
  const params = useParams();
  const navigate = useNavigate();

  function onBackPage() {
    navigate(-1);
  }

  async function fetchRestaurant(restaurantId: string) {
    // fazer request aqui
    await Promise.resolve(restaurantId);
  }

  useEffect(() => {
    fetchRestaurant(params.id as string);
  }, [params]);

  return (
    <AvailablerFoodsWrapper>
      <header className="search-container">
        <button onClick={onBackPage} className="search-button">
          <FaArrowLeft />
          <span>Voltar</span>
        </button>
      </header>

      <div className="body">
        <h1 className="title">Lanche da Deh</h1>
        <p className="description">
          Lanches funcionais - 1,3Km - Aberto - 4,9/5{" "}
        </p>
        <p className="cost">Faz entrega - R$ 9,99</p>

        <div className="available-foods">
          <h2 className="title">Alimentos disponíveis</h2>
          <RestaurantFoodCard
            description="Filé de peito de frango grelhado, aproximadamente 300g."
            title="Peito de Frango Grelhado"
            onClick={() => null}
            imageUrl=""
          />
          <RestaurantFoodCard
            title="Spaguetti Integral à Bolonhesa"
            description="Massa integral com temperos naturais, aproximadamente 300g."
            imageUrl=""
            onClick={() => null}
            selected
          />
        </div>
      </div>
    </AvailablerFoodsWrapper>
  );
};
