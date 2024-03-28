import { Product } from "../types/product.type";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getOne(id: string): Promise<Product | null>;
  create(product: Product): Promise<Product>;
  update(id: string, product: Product): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
