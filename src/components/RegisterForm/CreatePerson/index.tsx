import { useRef, useState } from "react";
import { Person, RegisterService } from "../../../services/Register.service";
import { CreatePersonWrapper } from "./styles";

export const CreatePerson = () => {
  const [steps, setSteps] = useState<"person" | "restaurant" | "address">(
    "person"
  );
  const form = useRef<Person>({
    fullname: "",
    email: "",
    documentNumber: "",
    password: "",
    phone: "",
    user_type: "donor",
    restaurant_data: {
      address: {
        city: "",
        district: "",
        number: "",
        state: "",
        street: "",
        zip_code: "",
      },
      cnpj: "",
      delivers: false,
      name: "",
      phone: "",
    },
  });

  function onCreate() {
    RegisterService.register(form.current);
  }

  return (
    <CreatePersonWrapper>
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
          <button onClick={() => setSteps("restaurant")}>Próximo passo</button>
        </>
      ) : null}
      {steps === "restaurant" ? (
        <>
          <span>Cadastrar dados do restaurante</span>
          <input
            placeholder="Nome do restaurante"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.name = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Telefone"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.phone = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="CNPJ"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.cnpj = (
                target as HTMLInputElement
              ).value)
            }
          />
          <button onClick={() => setSteps("address")}>Próximo passo</button>
        </>
      ) : null}
      {steps === "address" ? (
        <>
          <span>Cadastrar dados do restaurante</span>
          <input
            placeholder="CEP"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.address.zip_code = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Estado"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.address.state = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Cidade"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.address.city = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Rua"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.address.street = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Bairro"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.address.district = (
                target as HTMLInputElement
              ).value)
            }
          />
          <input
            placeholder="Numero"
            type="text"
            onInput={({ target }) =>
              (form.current.restaurant_data.address.number = (
                target as HTMLInputElement
              ).value)
            }
          />
          <button onClick={onCreate}>Concluir cadastro</button>
        </>
      ) : null}
    </CreatePersonWrapper>
  );
};
