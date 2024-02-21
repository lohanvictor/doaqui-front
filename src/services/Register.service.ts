export interface Address {
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  zip_code: string;
}

export interface Restaurant {
  name: string;
  phone: string;
  cnpj: string;
  delivers: boolean;
  address: Address;
}

export interface Person {
  user_type: "donor";
  fullname: string;
  documentNumber: string;
  phone: string;
  email: string;
  password: string;
  restaurant_data: Restaurant;
}

export class RegisterService {
  static register(person: Person) {
    console.log(person);
  }
}
