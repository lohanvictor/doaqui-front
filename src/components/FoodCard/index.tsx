import { FoodCardWrapper } from "./styles";

interface FoodCardProps {
  food: string;
  description: string;
  onClick(): void;
  selected?: boolean;
}

export const FoodCard = ({
  description,
  food,
  selected,
  onClick,
}: FoodCardProps) => {
  return (
    <FoodCardWrapper onClick={onClick} selected={selected}>
      <span className="title">{food}</span>
      <span className="description">{description}</span>
    </FoodCardWrapper>
  );
};
