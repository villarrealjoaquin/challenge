import type { Request, Response } from "express";
import { MongoDBRepository } from "../repositories/mongodb.repository";
import ProductsService from "../services/products.service";

class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  async getAllProducts(_req: Request, res: Response) {
    try {
      const getAll = await productsService.getAllProducts();
      res.status(200).json(getAll);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      res.status(500).json({ message: 'Something went wrong' });
    }
  }

  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await productsService.getProductById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(product);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      res.status(500).json({ message: 'Something went wrong' });
    }
  }

  async createProduct(req: Request, res: Response) {
    const body = req.body;
    try {
      const product = await productsService.create(body);
      return res.status(201).json(product);
    } catch (error) {
      console.log(error);
      
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      res.status(500).json({ message: 'Something went wrong' });
    }
  }

  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    try {
      const product = await productsService.update(id, body);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      res.status(500).json({ message: 'Something went wrong' });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await productsService.delete(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
}

const productsService = new ProductsService(new MongoDBRepository());
const productsController = new ProductsController(productsService);

export default productsController;