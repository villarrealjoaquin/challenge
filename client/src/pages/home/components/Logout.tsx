import { toast } from "sonner";
import { useAuthStore } from "../../../store/auth.store";

export default function Logout() {
  const setUser = useAuthStore((state) => state.setUser);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("storyToken");
      toast.success("Sesión cerrada con exito");
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error("Error al cerrar sesión");
    }
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className=" bg-red-500 hover:bg-red-600  inline-flex h-[35px] items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none focus:outline-none"
      >
        Cerrar Sesión
      </button>
    </>
  );
}
