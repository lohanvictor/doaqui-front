import { WhoAreYouWrapper } from "./styles";

interface WhoAreYouProps {
  onSelectType: (type: string) => void;
}

export const WhoAreYou = ({ onSelectType }: WhoAreYouProps) => {
  return (
    <WhoAreYouWrapper>
      <span>Quero ser um:</span>
      <button onClick={() => onSelectType("person")}>Doador</button>
      <button onClick={() => onSelectType("institution")}>Beneficiário</button>
    </WhoAreYouWrapper>
  );
};
