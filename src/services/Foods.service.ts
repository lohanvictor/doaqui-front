import { apiDonationService } from "../lib/api";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Food {
  _id?: string;
  name: string;
  price: number;
  validity_str: string;
  description: string;
  image: File | null;
  status_sale: boolean;
}

export interface FoodResponse extends Food {
  validity: string;
}

interface GetFoodsResponse {
  products: FoodResponse[];
}

export class FoodService {
  static async addFood(body: FormData) {
    await apiDonationService.post("/register/product", body);
  }

  static async getFoods() {
    const response = await apiDonationService.get<GetFoodsResponse>(
      "/products"
    );
    return response.data.products;
  }

  static async updateFood(body: FormData) {
    await apiDonationService.put(`/products/${body.get("_id")!}`, body);
  }
}
