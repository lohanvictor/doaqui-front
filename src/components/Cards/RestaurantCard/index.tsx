import { RestaurantCardWrapper } from "./styles";

interface RestaurantCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export const RestaurantCard = ({ description, imageUrl, title, onClick }: RestaurantCardProps) => {
  const backgroundImage = `url("${imageUrl}")`;
  return (
    <RestaurantCardWrapper
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="restaurant-info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="image" style={{ backgroundImage }}></div>
    </RestaurantCardWrapper>
  );
};
