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

export const CartWrapper = styled.div`
  width: 100%;
  padding: 8px;
  background-color: transparent;

  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 24px;
  }

  span.name {
    font-size: 18px;
  }

  div.count {
    width: 24px;
    height: 24px;
    background-color: var(--highlight);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 14px;
      color: white;
      font-weight: bold;
    }
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

  div.count {
    width: 24px;
    height: 24px;
    background-color: var(--highlight);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 14px;
      color: white;
      font-weight: bold;
    }
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
