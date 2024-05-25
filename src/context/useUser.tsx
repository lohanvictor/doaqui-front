/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Person } from "../services/Register.service";

interface UserContextProps {
  person: Person;
  updatePerson(person: Person): void;
}

export const UserContext = createContext<UserContextProps | null>(null);
UserContext.displayName = 'User'

const kPerson = "doaqui:person";

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [person, setPerson] = useState<Person>({
    documentNumber: "",
    email: "",
    fullname: "",
    password: "",
    phone: "",
    user_type: "donor",
  });

  function updatePerson(person: Person) {
    setPerson(person);
    localStorage.setItem(kPerson, JSON.stringify(person));
  }

  return (
    <UserContext.Provider value={{ person, updatePerson }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const result = useContext(UserContext);
  return result!;
};
