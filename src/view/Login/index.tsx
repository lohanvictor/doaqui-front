import { useNavigate } from "react-router-dom";
import { LoginWrapper } from "./styles";
import { LoginRequest, LoginService } from "../../services/Login.service";
import { useRef } from "react";
import { useUser } from "../../context/useUser";
import { CartService } from "../../services/Cart.service";
import { useCart } from "../../context/useCart";

export const LoginView = () => {
  const form = useRef<LoginRequest>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { updatePerson } = useUser();
  const { setCartId } = useCart();

  async function onLogin() {
    const response = await LoginService.login(form.current);
    const cart = await CartService.initCart(response._id!);
    setCartId(cart.id);
    updatePerson(response);
    navigate("/home");
  }
  function onNoAccount() {
    navigate("/register");
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
          <input
            placeholder="Email"
            type="text"
            onInput={({ target }) =>
              (form.current.email = (target as HTMLInputElement).value)
            }
          />
          <input
            placeholder="Senha"
            type="password"
            onInput={({ target }) =>
              (form.current.password = (target as HTMLInputElement).value)
            }
          />
          <button onClick={onLogin}>Logar</button>
          <button onClick={onNoAccount} className="no-account">
            <span>Não possui conta?</span>
          </button>
        </div>
      </div>
    </LoginWrapper>
  );
};
