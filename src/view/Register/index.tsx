import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { RegisterWrapper } from "./styles";
import { useState } from "react";
import { WhoAreYou } from "../../components/RegisterForm/WhoAreYou";
import { CreateInstitution } from "../../components/RegisterForm/CreateInstitution";
import { CreatePerson } from "../../components/RegisterForm/CreatePerson";

type StepsTypes = "who-are-you" | "create-institution" | "create-person";

export const RegisterView = () => {
  const [steps, setSteps] = useState<StepsTypes>("who-are-you");
  const navigate = useNavigate();

  function onSelectType(type: string) {
    if (type === "person") {
      setSteps("create-person");
    } else if (type === "institution") {
      setSteps("create-institution");
    }
  }
  function onBack() {
    navigate("/login");
  }
  return (
    <RegisterWrapper>
      <div className="register-container">
        <h1 className="title">
          DoAqui,
          <br />
          Maninho
        </h1>
        <div className="container">
          <button onClick={onBack} className="back">
            <FaArrowLeft />
            <span>Voltar ao Login</span>
          </button>
          {steps === "who-are-you" ? (
            <WhoAreYou onSelectType={onSelectType} />
          ) : null}
          {steps === "create-institution" ? <CreateInstitution /> : null}
          {steps === "create-person" ? <CreatePerson /> : null}
        </div>
      </div>
    </RegisterWrapper>
  );
};
