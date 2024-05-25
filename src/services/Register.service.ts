import { apiUserService } from "../lib/api";

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
  user_type: "donor" | "beneficiary";
  fullname: string;
  documentNumber: string;
  phone: string;
  email: string;
  password: string;
  address?: Address;
  restaurant_data?: Restaurant;
  _id?: string;
}

export interface CreateBeneficiaryResponse {
  beneficiary_id: string;
  message: string;
}

export class RegisterService {
  static async registerDonor(body: Person) {
    const response = await apiUserService.post("/donors/", body);
    return response.data as Person;
  }
  static async registerBeneficiary(body: Person) {
    const response = await apiUserService.post<CreateBeneficiaryResponse>(
      "/beneficiaries/",
      body
    );
    return response.data;
  }

  static async getBeneficiary(id: string) {
    const response = await apiUserService.get<Person>(`/beneficiaries/${id}`);
    return response.data;
  }
}
