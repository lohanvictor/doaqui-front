import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AvailablerFoodsWrapper } from "./styles";
import { FoodCard } from "../../components/FoodCard";
import { useEffect } from "react";

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
          <FoodCard
            description="Filé de peito de frango grelhado, aproximadamente 300g."
            food="Peito de Frango Grelhado"
            onClick={() => null}
            selected
          />
          <FoodCard
            food="Spaguetti Integral à Bolonhesa"
            description="Massa integral com temperos naturais, aproximadamente 300g."
            onClick={() => null}
          />
        </div>
      </div>
    </AvailablerFoodsWrapper>
  );
};
