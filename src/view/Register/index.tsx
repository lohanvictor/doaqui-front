import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { RegisterWrapper } from "./styles";
import { useState } from "react";
import { WhoAreYou } from "../../components/RegisterForm/WhoAreYou";
import { CreateBeneficiary } from "../../components/RegisterForm/CreateBeneficiary";
import { CreateDonor } from "../../components/RegisterForm/CreateDonor";

type StepsTypes = "who-are-you" | "create-beneficiary" | "create-donor";

export const RegisterView = () => {
  const [steps, setSteps] = useState<StepsTypes>("who-are-you");
  const navigate = useNavigate();

  function onSelectType(type: string) {
    if (type === "person") {
      setSteps("create-donor");
    } else if (type === "beneficiary") {
      setSteps("create-beneficiary");
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
          {steps === "create-beneficiary" ? <CreateBeneficiary /> : null}
          {steps === "create-donor" ? <CreateDonor /> : null}
        </div>
      </div>
    </RegisterWrapper>
  );
};
