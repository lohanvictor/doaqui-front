import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AvailablerFoodsWrapper } from "./styles";
import { FoodCard } from "../../components/FoodCard";

export const AvailableFoodsView = () => {
  const params = useParams();
  console.log(params);

  return (
    <AvailablerFoodsWrapper>
      <header className="search-container">
        <button className="search-button">
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
