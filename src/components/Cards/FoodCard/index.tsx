import { FoodCardWrapper } from "./styles";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  isSaled?: boolean;
  onClick?: () => void;
}

export const FoodCard = ({
  description,
  imageUrl,
  title,
  onClick,
  isSaled,
}: CardProps) => {
  const backgroundImage = `url("${imageUrl}")`;
  return (
    <FoodCardWrapper>
      <div className="restaurant-info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="image-wrapper">
        <div className="image" style={{ backgroundImage }}></div>
        <button
          onClick={onClick}
          className="toggle-sale"
          style={{
            backgroundColor: isSaled ? "var(--secondary)" : "var(--highlight)",
          }}
        >
          <span>{isSaled ? "Habilitar" : "Desabilitar"}</span>
        </button>
      </div>
    </FoodCardWrapper>
  );
};
