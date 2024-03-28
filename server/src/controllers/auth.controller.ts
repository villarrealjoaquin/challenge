import type { Request, Response } from "express";
import authService from "../services/auth.service";
import jwt, { VerifyErrors } from "jsonwebtoken";
import UserModel from "../models/user.model";

class AuthController {
  async signUp(req: Request, res: Response) {
    try {
      const responseUser = await authService.createUser(req.body);
      if (!responseUser) {
        return res.status(500).json({ message: "Error creating user" });
      }
      const token = authService.generateToken(responseUser);
      res.cookie("storyToken", token);
      return res.status(201).json({
        message: "User created successfully",
        data: responseUser,
        token,
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const existUser = await authService.findUser(email);
      if (!existUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const user = {
        id: existUser._id,
        name: existUser.name,
        email: existUser.email,
      };
      const isPasswordValid = await authService.comparePasswords(
        password,
        existUser?.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = authService.generateToken(user);
      res.cookie("storyToken", token);
      return res
        .status(200)
        .json({ message: "User logged in successfully", user, token });
    } catch (error) {
      res.status(500).json({ message: "Error logging in" });
    }
  }

  async verifyToken(req: Request, res: Response) {
    try {
      const { storyToken } = req.cookies;
      if (!storyToken) return res.status(401).json({ message: "Unauthorized" });
      const secret = process.env.JWT_SECRET;
      if (!secret) return res.status(401).json({ message: "Unauthorized" });
      await authService.validateToken(storyToken, secret, res);
    } catch (error) {
      res.status(500).json({ message: "Error verifying token" });
    }
  }
}

const authController = new AuthController();
export default authController;
