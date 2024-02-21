import styled from "styled-components";

export const FoodCardWrapper = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--primary-dark);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .restaurant-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    .title {
      font-size: 28px;
      font-weight: 200;
      color: white;
    }
    .description {
      font-size: 16px;
      font-weight: 600;
      color: white;
    }
  }

  .image-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    .image {
      height: 64px;
      width: 64px;
      border-radius: 8px;
      background-size: cover;
    }

    button.toggle-sale {
      width: 80px;
      color: white;
      font-weight: 600;
      font-size: 12px;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      height: fit-content;
    }
  }

  transform: scale(1);
  transition: 200ms;
  &:hover {
    transform: scale(1.01);
  }
`;
