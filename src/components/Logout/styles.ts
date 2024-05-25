import styled from "styled-components";

export const LogoutWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
  margin-top: auto;

  svg {
    font-size: 24px;
    path {
        fill: #ff4d4d;
    }
  }

  span {
    font-size: 18px;
    color: #ff4d4d;
    font-weight: bold;
  }

  &:hover {
    background-color: #e78787;

    svg path {
        fill: white;
    }

    span {
      color: white;
    }
  }
`;
