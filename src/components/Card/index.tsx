import { CardWrapper } from "./styles";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick(): void;
}

export const Card = ({ description, imageUrl, title, onClick }: CardProps) => {
  const backgroundImage = `url("${imageUrl}")`;
  return (
    <CardWrapper onClick={onClick}>
      <div className="restaurant-info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="image" style={{ backgroundImage }}></div>
    </CardWrapper>
  );
};
