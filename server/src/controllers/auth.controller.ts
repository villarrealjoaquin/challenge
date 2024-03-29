import type { Request, Response } from "express";
import authService from "../services/auth.service";
import { HttpStatus } from "../utils/http-status-enum";

class AuthController {
  async signUp(req: Request, res: Response) {
    try {
      const responseUser = await authService.createUser(req.body);
      if (!responseUser) {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: "Error creating user" });
      }
      const token = authService.generateToken(responseUser);
      res.cookie("storyToken", token);
      return res.status(HttpStatus.CREATED).json({
        message: "User created successfully",
        data: responseUser,
        token,
      });
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error creating user" });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const existUser = await authService.findUser(email);
      if (!existUser) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "User not found" });
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
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ message: "Invalid credentials" });
      }
      const token = authService.generateToken(user);
      const cookieParams = { httpOnly: true, secure: true };
      res.cookie("storyToken", token, cookieParams);
      return res
        .status(HttpStatus.OK)
        .json({ message: "User logged in successfully", user, token });
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error logging in" });
    }
  }

  async logout(_req: Request, res: Response) {
    try {
      res.clearCookie("storyToken");
      res.json({ message: "Logout success" });
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error logging out" });
    }
  }

  async verifyToken(req: Request, res: Response) {
    try {
      const storyToken = req.headers.authorization?.split(' ')[1]
      if (!storyToken) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ message: "Unauthorized" });
      }
      await authService.validateToken(storyToken, process.env.JWT_SECRET, res);
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Error verifying token" });
    }
  }
}

const authController = new AuthController();
export default authController;
