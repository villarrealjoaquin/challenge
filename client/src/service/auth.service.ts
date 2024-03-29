import type { User } from "../types/user";
import instance from "./axios.config";

const api = {
  signIn: (user: Partial<User>) => instance.post("/auth/login", user),
  signUp: (user: Partial<User>) => instance.post("/auth/signup", user),
  logout: () => instance.get("/auth/logout"),
  verifyTokenRequest: () => instance.get('auth/verify'),
};

export default api;
