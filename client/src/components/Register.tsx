import { useState } from "react";
import api from "../service/auth.service";
import { useAuthStore } from "../store/auth.store";
import { toast } from "sonner";

const initialState = {
  name: "",
  email: "",
  password: "",
} as const;

export default function Register({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(initialState);
  const setUser = useAuthStore((state) => state.setUser);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.signUp(data);
      if (res.data) {
        const token = res.data.token;
        localStorage.setItem("storyToken", token);
        setUser(res.data.user);
        setData(initialState);
        setIsAuthenticated(true);
        toast.success("Se registro correctamente");
      }
    } catch (error) {
      setData(initialState);
      setUser(null);
    }
  };

  return (
    <>
      <form className="mb-[15px]" onSubmit={handleSubmit}>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="text-violet11 w-[90px] text-right text-[15px]"
            htmlFor="email"
          >
            Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="name"
            name="name"
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            placeholder="Correo electrónico"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="text-violet11 w-[90px] text-right text-[15px]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            onChange={handleChange}
            id="email"
            name="email"
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            placeholder="Correo electrónico"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="text-violet11 w-[90px] text-right text-[15px]"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="password"
            id="password"
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            placeholder="Contraseña"
          />
        </fieldset>
        {children}
      </form>
    </>
  );
}
