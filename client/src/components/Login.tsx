import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/auth.service";
import { useAuthStore } from "../store/auth.store";

const initialState = {
  email: "",
  password: "",
} as const;

export default function Login({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(initialState);
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.signIn(data);
      if (res.data) {
        const token = res.data.token;
        window.localStorage.setItem("storyToken", token);
        setUser(res.data.user);
        // navigate("/");
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
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
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
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            placeholder="Contraseña"
          />
        </fieldset>
        {children}
      </form>
    </>
  );
}
