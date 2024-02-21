/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Food {
  name: string;
  price: number;
  validity_str: string;
  description: string;
  image: File | null;
  status_sale: boolean;
}

export class FoodService {}
