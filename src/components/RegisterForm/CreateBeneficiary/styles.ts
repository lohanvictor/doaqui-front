import styled from "styled-components";

export const CreateInstutitionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 16px 32px 32px;
  border-radius: 16px;
  gap: 16px;
  background-color: var(--secondary-light);

  span {
    color: white;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
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
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: var(--primary);
    cursor: pointer;
  }
  button.no-account {
    background-color: transparent;
    width: auto;
    height: auto;
    cursor: pointer;
    margin-left: auto;

    span {
      color: white;
      text-align: end;
      font-size: 12px;
    }

    &:hover {
      span {
        text-decoration: underline;
      }
    }
  }
`;
