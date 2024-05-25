import styled from "styled-components";

export const FoodsWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 16px;
  background-color: var(--secondary);

  .new-product-wrapper {
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-end;

    button {
      background-color: var(--primary-dark);
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 16px;
      color: white;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .products {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
