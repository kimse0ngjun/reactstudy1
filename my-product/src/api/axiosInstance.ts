import axios from "axios";
import type { Product, ProductInput } from "../types/Product";

const instance = axios.create({
  baseURL: "/api/product", //localhost:8080/api/product
  headers: { "Content-Type": "application/json" },
});

export const productApi = {
  getList: () => instance.get<Product[]>("/list").then((res) => res.data), // localhost:8080/api/product/list
  getDetail: (num: number) =>
    instance.get<Product>(`/detail/${num}`).then((res) => res.data),
  insert: (data: ProductInput) =>
    instance.post<String>("/insert", data).then((res) => res.data),
  update: (data: Product) =>
    instance.put<string>("/update", data).then((res) => res.data),
  delete: (num: number) =>
    instance.delete<string>(`/delete/${num}`).then((res) => res.data),
};
// export const ProductApi = axios.create({
//   baseURL: "http://localhost:8080/api/product",
//   headers: { "Content-Type": "application/json" },
// });
