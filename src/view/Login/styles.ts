import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: var(--secondary);

  display: flex;
  justify-content: center;
  align-items: center;

  .login-container {
    display: flex;
    flex-direction: column;
    gap: 64px;

    h1.title {
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      color: white;
    }

    .login {
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
        font-weight: 600;
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
    }
  }
`;
