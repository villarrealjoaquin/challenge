import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export const AuthGuard = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) return <></>;

  return !isLoading && isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to="/" />
  );
};
