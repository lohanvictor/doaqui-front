import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
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
    margin-bottom: 32px;
  }

  main.main {
    h1.title {
      font-size: 64px;
      margin: 0px;
      line-height: 64px;
      margin-bottom: 16px;
      color: #fff;
      font-weight: 100;
    }
    h2 {
      color: #fff;
      font-weight: 700;
    }
  }
`;
