import { ProductRepository } from "../repositories/products.repository";
import { Product } from "../types/product.type";

class ProductsService {
  private readonly productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.getAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.productRepository.getOne(id);
  }

  async create(product: Product) {
    return this.productRepository.create(product);
  }

  async update(id: string, product: Product) {
    return this.productRepository.update(id, product);
  }

  async delete(id: string) {
    return this.productRepository.delete(id);
  }
}

export default ProductsService;