import { BiLogOut } from "react-icons/bi";
import { LogoutWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate()

  function onLogout() {
    navigate('/login')
  }

  return (
    <LogoutWrapper onClick={onLogout}>
      <BiLogOut />
      <span>Sair</span>
    </LogoutWrapper>
  );
};
