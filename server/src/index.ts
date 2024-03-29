import app from "./app";
import { connectDB } from "./database/database";

const PORT = process.env.PORT || 4000;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      MONGODB_URL: string;
      JWT_SECRET: string;
      JWT_EXPIRES_IN: string;
    }
  }
}

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
