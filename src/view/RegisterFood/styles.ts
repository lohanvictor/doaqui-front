import styled from "styled-components";

export const RegisterFoodWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 16px;
  background-color: var(--secondary);

  button.back {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 16px;
    cursor: pointer;
    background-color: transparent;
    svg {
      font-size: 18px;
      path {
        fill: white;
      }
    }
    span {
      color: white;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 16px 32px 32px;
    border-radius: 16px;
    gap: 16px;
    background-color: var(--secondary-light);

    span {
      color: white;
      font-size: 24px;
      font-weight: 600;
    }

    .form-name {
      width: 100%;
      gap: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .image {
      display: flex;
      width: 100%;
      gap: 8px;

      span.description {
        font-size: 16px;
      }
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      height: 32px;
      padding: 0px 8px;
      border-radius: 4px;
      background-color: var(--secondary);
      color: white;
    }

    button {
      padding: 8px 16px;
      height: 32px;
      border: none;
      border-radius: 4px;
      color: white;
      font-weight: bold;
      background-color: var(--primary);
      cursor: pointer;
      align-self: flex-end;
    }
  }
`;
