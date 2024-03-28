import type { Types } from "mongoose";

export interface User {
  id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
}

export interface Product {
  id?: Types.ObjectId;
  name: string;
  price: number;
  description: string;
  image_url: string;
  brand: Brand;
}

interface Brand {
  id?: string;
  name: string;
  logo_url: string;
}