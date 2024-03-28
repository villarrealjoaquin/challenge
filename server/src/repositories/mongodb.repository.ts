import { ProductRepository } from "./products.repository";
import ProductModel from "../models/product.model";
import BrandModel from "../models/marca.model";
import type { Product } from "../types/product.type";
import { validateSchema } from "../utils/validateSchema";
import productSchema from "../schemas/product.schema";

export class MongoDBRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    const products = await ProductModel.find();
    return products.map((product) => product.toObject() as Product);
  }

  async getOne(id: string): Promise<Product | null> {
    const product = await ProductModel.findOne({ _id: id });
    return product ? (product.toObject() as Product) : null;
  }

  async create(product: Product): Promise<Product> {
    // const validatorSchema = validateSchema(productSchema, product);
    // if (!validatorSchema) {
    //   throw new Error("Invalid product data");
    // }
    
    const existingProduct = await ProductModel.findOne({
      name: product.name,
    });
    
    if (existingProduct) {
      throw new Error("Product already exists");
    }
    
    const hasBrand = await BrandModel.findById(product.brand);
    console.log(hasBrand);
    if (!hasBrand) throw new Error("Brand not found");
    
    const newProduct = {
      ...product,
    };

    const createProduct = new ProductModel(newProduct);
    createProduct.brand = hasBrand as any;
    const result = await createProduct.save();
    console.log(result);
    
    return result.toObject() as Product;
  }

  async update(id: string, product: Product): Promise<boolean> {
    if (!id) {
      throw new Error("El id del producto no es válido");
    }
    await ProductModel.updateOne({ _id: id }, product);
    return true;
  }

  async delete(id: string): Promise<boolean> {
    if (!id) {
      throw new Error("El id del producto no es válido");
    }
    await ProductModel.deleteOne({ _id: id });
    return true;
  }
}
