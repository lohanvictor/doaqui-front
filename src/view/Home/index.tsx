import { useUser } from "../../context/useUser";
import { HomeWrapper } from "./styles";

export const HomeView = () => {
  const { person } = useUser();

  return (
    <HomeWrapper>
      <header className="search-container">
        <input
          placeholder="Busque o alimento"
          type="text"
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </header>

      <main className="main">
        <h1 className="title">
          Bem-vindo,
          <br /> {person.fullname}
        </h1>
        <h2>
          Entre em contato com um de nossos restaurantes parceiros e encontre a
          doação ideal para suas necessidades.
        </h2>
      </main>
    </HomeWrapper>
  );
};
