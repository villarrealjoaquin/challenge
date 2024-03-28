import { create } from "zustand";
import { User } from "../types/user";

interface State {
  user: User | null;
  token: string | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface Actions {
  setUser: (user: User | null) => void;
  setToken: (token: string | undefined) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setisLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<State & Actions>((set) => ({
  user: null,
  token: undefined,
  isAuthenticated: false,
  isLoading: true,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setisLoading: (isLoading) => set({ isLoading }),
}));
