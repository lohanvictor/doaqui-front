import { IoMdHome, IoMdRestaurant, IoMdCart } from "react-icons/io";

import { IoFastFoodSharp } from "react-icons/io5";

import { ButtonPage, SidebarWrapper } from "./styles";
import { Logout } from "../Logout";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { products } = useCart();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  function onSelectPage(page: string) {
    if (page === location.pathname) return;
    navigate(page);
  }

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <SidebarWrapper>
      <h1 className="title">
        DoAqui,
        <br />
        Maninho
      </h1>
      <ButtonPage
        selected={currentPage.includes("/cart")}
        onClick={() => onSelectPage("/cart")}
      >
        <IoMdCart />

        <span className="name">Carrinho</span>
        {products.length ? (
          <div className="count">
            <span>{products.length}</span>
          </div>
        ) : null}
      </ButtonPage>
      <ButtonPage
        selected={currentPage.includes("/home")}
        onClick={() => onSelectPage("/home")}
      >
        <IoMdHome />
        <span className="name">Inicio</span>
      </ButtonPage>
      <ButtonPage
        selected={currentPage.includes("/restaurant")}
        onClick={() => onSelectPage("/restaurant")}
      >
        <IoMdRestaurant />
        <span className="name">Restaurantes</span>
      </ButtonPage>
      <ButtonPage
        selected={currentPage.includes("/foods")}
        onClick={() => onSelectPage("/foods")}
      >
        <IoFastFoodSharp />
        <span className="name">Comidas</span>
      </ButtonPage>

      <Logout />
    </SidebarWrapper>
  );
};
