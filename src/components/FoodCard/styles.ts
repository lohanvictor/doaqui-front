import styled, { css } from "styled-components";

export const FoodCardWrapper = styled.button<{ selected?: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: var(--primary-dark);

  display: flex;
  flex-direction: column;
  gap: 0px;

  .title {
    font-size: 18px;
    font-weight: 600;
    color: white;
    text-transform: capitalize;
  }

  .description {
    font-size: 16px;
    font-weight: 200;
    color: white;
  }

  ${({ selected }) =>
    selected
      ? css`
          .title,
          .description {
            text-decoration: line-through;
          }
        `
      : ""}
`;
