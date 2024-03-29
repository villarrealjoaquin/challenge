import type { Product } from "../types/product";
import instance from "./axios.config";

const api = {
  getAllProducts: () => instance.get("/products"),
  getProduct: (id: string) => instance.get(`/products/${id}`),
  createProduct: (data: Product, token: string) =>
    instance.post("/products", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  updateProduct: (id: string, data: Product, token: string) =>
    instance.patch(`/products/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  deleteProduct: (id: string, token: string) =>
    instance.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default api;
