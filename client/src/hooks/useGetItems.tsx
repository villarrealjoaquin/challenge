import { useEffect, useState } from "react";
import { Product } from "../types/product";
import instance from "../service/axios.config";

export const useGetItems = (url: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateProducts = (products: Product[]) => {
    setProducts(products);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await instance.get(url);
        setProducts(response.data);
        setIsLoading(true);
      } catch (error) {
        setProducts([]);
        setIsLoading(false);
      }
    };
    getProducts();
  }, [url]);

  return { products, updateProducts, isLoading };
};
