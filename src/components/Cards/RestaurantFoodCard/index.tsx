import { RestaurantFoodCardWrapper } from "./styles";

interface RestaurantFoodCardProps {
  title: string;
  description: string;
  imageUrl: string;
  selected?: boolean;
  onClick?: () => void;
}

export const RestaurantFoodCard = ({
  description,
  imageUrl,
  title,
  onClick,
  selected,
}: RestaurantFoodCardProps) => {
  const backgroundImage = `url("${imageUrl}")`;

  return (
    <RestaurantFoodCardWrapper
      onClick={onClick}
      selected={Boolean(selected)}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="restaurant-info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="image" style={{ backgroundImage }}></div>
    </RestaurantFoodCardWrapper>
  );
};
