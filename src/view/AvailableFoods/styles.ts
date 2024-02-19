import styled from "styled-components";

export const AvailablerFoodsWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 16px;
  background-color: var(--secondary);

  header.search-container {
    button.search-button {
      border-radius: 4px;
      outline: none;
      border: none;
      cursor: pointer;
      background-color: transparent;
      color: var(--secondary);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        font-size: 18px;
        path {
          fill: white;
        }
      }

      span {
        font-size: 18px;
        font-weight: 600;
        color: white;
      }
    }
    margin-bottom: 16px;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    max-height: 100%;
    overflow-y: auto;
    background-color: var(--secondary-light);

    h1.title {
      font-size: 48px;
      line-height: 48px;
      font-weight: 700;
      color: var(--primary);
      margin: 0px;
    }

    .description {
      font-size: 18px;
      font-weight: 200;
      color: white;
    }

    .cost {
      font-size: 18px;
      font-weight: 200;
      color: white;
    }

    .available-foods {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      .title {
        font-size: 24px;
        font-weight: 700;
        color: white;
      }
    }
  }
`;
