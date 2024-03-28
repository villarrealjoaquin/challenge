export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  brand: Brand;
}

interface Brand {
  _id: string;
  name: string;
  logo_url: string;
}