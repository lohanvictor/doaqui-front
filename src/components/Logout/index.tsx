import { BiLogOut } from "react-icons/bi";
import { LogoutWrapper } from "./styles";

export const Logout = () => {
  return (
    <LogoutWrapper>
      <BiLogOut />
      <span>Sair</span>
    </LogoutWrapper>
  );
};
