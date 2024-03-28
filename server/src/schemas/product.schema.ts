import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }).max(20, { message: "Name cannot be longer than 20 characters" }),
  price: z.number().int().positive({ message: "Price must be a positive integer" }),
  description: z.string().min(6, { message: "Description must be at least 6 characters long" }).max(20, { message: "Description cannot be longer than 20 characters" }),
  image_url: z.string().url({ message: "Invalid image URL" }),
});

export default productSchema;
