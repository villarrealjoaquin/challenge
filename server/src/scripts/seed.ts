import mongoose from "mongoose";
import { exampleProducts } from "../mock";

const { MONGODB_URL } = process.env;
if (!MONGODB_URL) throw new Error("MONGODB_URL must be defined");

const insertProducts = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URL);

    if (connection.readyState === 1) {
      for await (const product of exampleProducts) {
        const response = await fetch("http://localhost:4000/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        if (response.ok) {
          console.log(`Producto '${product.name}' insertado correctamente`);
        } else {
          console.error(
            `Error al insertar el producto '${product.name}': ${response.statusText}`
          );
        }
      }

      console.log("¡Todos los productos se han agregado correctamente!");
    }
  } catch (error) {
    console.error("Error al insertar productos:", error);
  } finally {
    mongoose.disconnect();
  }
};

insertProducts();
