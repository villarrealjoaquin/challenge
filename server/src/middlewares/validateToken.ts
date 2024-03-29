import type { NextFunction, Request, Response } from "express";
import jwt, { type VerifyErrors } from "jsonwebtoken";
import type { User } from "../types/product.type";
import { HttpStatus } from "../utils/http-status-enum";

export interface CustomRequest extends Request {
  user?: User;
}

export const validateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.headers);

    const storyToken = req.headers.authorization?.split(" ")[1];
    console.log(storyToken);

    if (!storyToken) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        error: "Unauthorized",
      });
    }

    jwt.verify(
      storyToken,
      process.env.JWT_SECRET,
      (error: VerifyErrors | null, user: any) => {
        if (error) {
          return res.status(HttpStatus.UNAUTHORIZED).json({
            error: "Unauthorized",
          });
        }
        req.user = user as User;
        next();
      }
    );
  } catch (error) {
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ data: error, error: true });
  }
};
