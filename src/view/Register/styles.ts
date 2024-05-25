import styled from "styled-components";

export const RegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: var(--secondary);

  display: flex;
  justify-content: center;
  align-items: center;

  .register-container {
    display: flex;
    flex-direction: column;
    gap: 64px;

    h1.title {
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      color: white;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 16px;

      button.back {
        display: flex;
        align-items: center;
        gap: 8px;
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
  }
`;
