import styled from "styled-components";

export const WhoAreYouWrapper = styled.div`
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
  }

  button {
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: var(--primary);
    cursor: pointer;
    font-weight: 700;
  }
`;
