import type { NextFunction, Request, Response } from "express";
import jwt, { type VerifyErrors } from "jsonwebtoken";
import type { User } from "../types/product.type";

export interface CustomRequest extends Request {
  user?: User;
}

export const validateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { storyToken } = req.cookies;
  
  if (!storyToken) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }
  
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
  
  jwt.verify(
    storyToken,
    process.env.JWT_SECRET,
    (error: VerifyErrors | null, user: any) => {
      if (error) {
        console.log('error');
        
        return res.status(401).json({
          error: "Unauthorized",
        });
      }
      req.user = user as User;
      next();
    }
  );
};
