import { useRef, useState } from "react";
import { Person, RegisterService } from "../../../services/Register.service";
import { CreateInstutitionWrapper } from "./styles";
import { useUser } from "../../../context/useUser";
import { useNavigate } from "react-router-dom";
import { CartService } from "../../../services/Cart.service";
import { useCart } from "../../../context/useCart";

export const CreateBeneficiary = () => {
  const [steps, setSteps] = useState<"person" | "address">("person");
  const form = useRef<Person>({
    fullname: "",
    email: "",
    documentNumber: "",
    password: "",
    phone: "",
    user_type: "beneficiary",
    address: {
      city: "",
      district: "",
      number: "",
      state: "",
      street: "",
      zip_code: "",
    },
  });

  const { updatePerson } = useUser();
  const navigate = useNavigate();
  const { setCartId } = useCart();

  async function onCreate() {
    const { beneficiary_id } = await RegisterService.registerBeneficiary(
      form.current
    );
    const personCreated = await RegisterService.getBeneficiary(beneficiary_id);
    const cart = await CartService.initCart(personCreated._id!);
    setCartId(cart.id);
    updatePerson(personCreated);
    navigate("/home");
  }
  return (
    <CreateInstutitionWrapper>
      {steps === "person" ? (
        <>
          <span>Cadastrar dados pessoais</span>
          <input
            placeholder="Nome completo"
            type="text"
            onInput={({ target }) =>
              (form.current.fullname = (target as HTMLInputElement).value)
            }
          />
          <input
            placeholder="Email"
            type="text"
            onInput={({ target }) =>
              (form.current.email = (target as HTMLInputElement).value)
            }
          />
          <input
            placeholder="CPF"
            type="text"
            onInput={({ target }) =>
              (form.current.documentNumber = (target as HTMLInputElement).value)
            }
          />
          <input
            placeholder="Senha"
            type="password"
            onInput={({ target }) =>
              (form.current.password = (target as HTMLInputElement).value)
            }
          />
          <button onClick={() => setSteps("address")}>Próximo passo</button>
        </>
      ) : null}
      {steps === "address" ? (
        <>
          <span>Cadastrar endereço</span>
          <input
            placeholder="CEP"
            type="text"
            onInput={({ target }) =>
              (form.current.address!.zip_code = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Estado"
            type="text"
            onInput={({ target }) =>
              (form.current.address!.state = (target as HTMLInputElement).value)
            }
          />
          <input
            placeholder="Cidade"
            type="text"
            onInput={({ target }) =>
              (form.current.address!.city = (target as HTMLInputElement).value)
            }
          />
          <input
            placeholder="Rua"
            type="text"
            onInput={({ target }) =>
              (form.current.address!.street = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Bairro"
            type="text"
            onInput={({ target }) =>
              (form.current.address!.district = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Numero"
            type="text"
            onInput={({ target }) =>
              (form.current.address!.number = (
                target as HTMLInputElement
              ).value)
            }
          />
          <button onClick={onCreate}>Concluir cadastro</button>
        </>
      ) : null}
    </CreateInstutitionWrapper>
  );
};
