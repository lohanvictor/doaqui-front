import { apiAuthService } from "../lib/api";
import { Person } from "./Register.service";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export class LoginService {
  static async login(request: LoginRequest) {
    const response = await apiAuthService.post<Person>(
      "/token",
      request
    );
    return response.data;
  }
}
