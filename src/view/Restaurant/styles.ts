import styled from "styled-components";

export const RestaurantWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 16px;
  background-color: var(--secondary);

  header.search-container {
    display: flex;
    justify-content: flex-start;
    gap: 8px;

    span {
      font-weight: bold;
      font-size: 24px;
      color: white;
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
