import UserModel from "../models/user.model";
import type { User } from "../types/product.type";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class authService {
  async createUser(user: User) {
    const salt = 10;
    const passwordHash = await this.hashPassword(user.password, salt);
    const userData = {
      name: user.name,
      email: user.email,
      password: passwordHash,
    };
    const createUser = await UserModel.create(userData);
    return createUser;
  }
  
  async findUser(email: string) {
    return UserModel.findOne({ email });
  }

  hashPassword(password: string, salt: number) {
    return bcrypt.hash(password, salt);
  }

  generateToken(user: Partial<User>) {
    return jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );
  }

  async comparePasswords(password: string, storedPasswordHash: string) {
    return bcrypt.compare(password, storedPasswordHash);
  }
}

export default new authService();
