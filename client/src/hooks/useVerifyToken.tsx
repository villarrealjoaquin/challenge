import { useEffect } from "react";
import api from "../service/auth.service";
import { useAuthStore } from "../store/auth.store";

export default function useVerifyToken() {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const setUser = useAuthStore((state) => state.setUser);
  const setIsLoading = useAuthStore((state) => state.setisLoading);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const cookie = localStorage.getItem("storyToken");
        if (cookie) {
          setIsLoading(true);
          const { data } = await api.verifyTokenRequest();
          setIsAuthenticated(true);
          setUser(data);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    verifyToken();
  }, [setIsAuthenticated, setUser, setIsLoading]);
}
