import { useNavigate } from "react-router-dom";
import { LoginWrapper } from "./styles";

export const LoginView = () => {
  const navigate = useNavigate();
  function onLogin() {
    navigate("/home");
  }
  return (
    <LoginWrapper>
      <div className="login-container">
        <h1 className="title">
          DoAqui,
          <br />
          Maninho
        </h1>
        <div className="login">
          <span>Login</span>
          <input placeholder="Usuario" type="text" />
          <input placeholder="Senha" type="password" />
          <button onClick={onLogin}>Logar</button>
        </div>
      </div>
    </LoginWrapper>
  );
};
