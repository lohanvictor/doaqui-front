import styled from "styled-components";

export const RestaurantWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 16px;
  background-color: var(--secondary);

  header.search-container {
    display: flex;
    justify-content: flex-end;
    gap: 8px;

    input.search-input {
      width: 100%;
      height: 32px;
      outline: none;
      border-radius: 4px;
      padding: 4px;
      border: none;
    }

    button.search-button {
      height: 32px;
      border-radius: 4px;
      outline: none;
      border: none;
      background-color: var(--primary);
      cursor: pointer;
      padding: 0px 16px;
      color: var(--secondary);
      /* color: white  ; */
      font-weight: 500;
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
