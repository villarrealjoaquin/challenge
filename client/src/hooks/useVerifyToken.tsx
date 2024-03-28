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
        const user = localStorage.getItem("storyToken");
        if (user) {
          const { data } = await api.verifyTokenRequest();
          setIsAuthenticated(true);
          setUser(data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setIsLoading(false);
        setUser(null);
      }
    };
    verifyToken();
  }, [setIsAuthenticated, setUser]);

  return null;
}
