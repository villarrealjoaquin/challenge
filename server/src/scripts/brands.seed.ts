import mongoose from "mongoose";
import { marcas } from "../mock";
import marcaModel from "../models/marca.model";

const { MONGODB_URL } = process.env;
if (!MONGODB_URL) throw new Error("MONGODB_URL must be defined");

const insertBrands = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URL);
    if (connection.readyState === 1) {
      await marcaModel.insertMany(marcas);
      return;
    }
  } catch (error) {
    console.error("Error al insertar marcas:", error);
  } finally {
    mongoose.disconnect();
  }
};

insertBrands();
