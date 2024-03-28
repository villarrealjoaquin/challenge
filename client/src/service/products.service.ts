import type { Product } from "../types/product";
import instance from "./axios.config";

const api = {
  getAllProducts: () => instance.get('/products'),
  getProduct: (id: string) => instance.get(`/products/${id}`),
  createProduct: (data: Product) => instance.post('/products', data),
  updateProduct: (id: string, data: Product) => instance.patch(`/products/${id}`, data),
  deleteProduct: (id: string) => instance.delete(`/products/${id}`),
}

export default api;