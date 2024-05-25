import { Outlet } from "react-router-dom";
import { RootWrapper } from "./styles";
import { Sidebar } from "../../components/Sidebar";

export const RootView = () => {
  return (
    <RootWrapper>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </RootWrapper>
  );
};
