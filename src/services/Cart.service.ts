import { apiReceiveService } from "../lib/api";

export interface ProductInCart {
  product_id: string;
}

export interface InitCartResponse {
  id: string;
  user_id: string;
  products: ProductInCart[];
  delivery_status?: string;
}

export class CartService {
  static async initCart(user_id: string) {
    return (
      await apiReceiveService.post<InitCartResponse>("/carts/", { user_id })
    ).data;
  }

  static async updateCart(cart_id: string, products: ProductInCart[]) {
    return (
      await apiReceiveService.put<{ products: ProductInCart[] }>(
        `/carts/${cart_id}`,
        { products }
      )
    ).data.products;
  }

  static async getCart(cart_id: string) {
    return (await apiReceiveService.get<InitCartResponse>(`/carts/${cart_id}`))
      .data;
  }

  static async finishCart(cart_id: string, products: ProductInCart[]) {
    return (
      await apiReceiveService.put<InitCartResponse>(
        `/carts/delivery/${cart_id}`,
        { products }
      )
    ).data;
  }
}
