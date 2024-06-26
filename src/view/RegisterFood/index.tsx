import { FaArrowLeft } from "react-icons/fa";
import { RegisterFoodWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useRef } from "react";
import { Food, FoodService } from "../../services/Foods.service";

export const RegisterFoodView = () => {
  const navigate = useNavigate();

  const form = useRef<Food>({
    description: "",
    image: null,
    name: "",
    price: 0,
    status_sale: false,
    validity_str: "",
  });

  function onBack() {
    navigate("/foods");
  }

  function onSelectImageFood(event: ChangeEvent) {
    const file = (event.target as HTMLInputElement).files?.item(0);
    form.current.image = file!;
  }

  async function onRegister() {
    const formData = new FormData();
    formData.append("description", form.current.description);
    formData.append("name", form.current.name);
    formData.append("image", form.current.image!);
    formData.append("price", form.current.price.toString());
    formData.append("status_sale", String(form.current.status_sale));
    formData.append("validity_str", form.current.validity_str);
    await FoodService.addFood(formData);
    onBack()
  }

  return (
    <RegisterFoodWrapper>
      <button onClick={onBack} className="back">
        <FaArrowLeft />
        <span>Voltar as comidas</span>
      </button>

      <div className="register">
        <span>Cadastrar dados da comida</span>
        <div className="form-name">
          <input
            placeholder="Nome da comida"
            type="text"
            onInput={({ target }) =>
              (form.current.name = (target as HTMLInputElement).value)
            }
          />
          <input
            placeholder="Preco"
            type="text"
            onInput={({ target }) =>
              (form.current.price = +(target as HTMLInputElement).value)
            }
          />
          <input
            placeholder="Data de validade"
            type="date"
            onInput={({ target }) =>
              (form.current.validity_str = (target as HTMLInputElement).value)
            }
          />
        </div>
        <input
          placeholder="Descricao"
          type="text"
          onInput={({ target }) =>
            (form.current.description = (target as HTMLInputElement).value)
          }
        />
        <div className="image">
          <span className="description">Escolha uma image</span>
          <input
            onChange={onSelectImageFood}
            type="file"
            accept="image/png, image/jpeg"
          />
        </div>
        <button onClick={onRegister}>Cadastrar</button>
      </div>
    </RegisterFoodWrapper>
  );
};
