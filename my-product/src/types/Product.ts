export interface Product {
  num: number;
  name: string;
  price: number;
  amount: number;
}

export type ProductInput = Omit<Product, "num">; // Omit<> - 생략
