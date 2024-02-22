import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 16px;
  background-color: var(--secondary);

  header.search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    span {
      font-weight: bold;
      font-size: 24px;
      color: white;
    }

    button {
      background-color: var(--primary-dark);
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 16px;
      color: white;
      font-size: 16px;
      font-weight: 700;
    }
    margin-bottom: 16px;
  }

  .body {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
