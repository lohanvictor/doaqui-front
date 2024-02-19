import styled, { css } from "styled-components";

export const SidebarWrapper = styled.aside`
  width: 250px;
  height: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  padding-top: 52px;
  padding-bottom: 8px;

  .title {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    margin: 0px;
    margin-bottom: 16px;
    color: var(--secondary);
  }
`;

export const ButtonPage = styled.button<{ selected: boolean }>`
  width: 100%;
  padding: 8px;
  text-align: start;
  cursor: pointer;
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 24px;
  }

  span.name {
    font-size: 18px;
  }

  ${({ selected }) =>
    selected
      ? css`
          background-color: var(--primary-dark);

          svg path {
            fill: white;
          }

          span.name {
            color: white;
          }
        `
      : ""}
`;
