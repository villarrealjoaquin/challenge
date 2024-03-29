import mongoose from "mongoose";
import { marcas } from "../mock";
import marcaModel from "../models/marca.model";

const insertBrands = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);
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
