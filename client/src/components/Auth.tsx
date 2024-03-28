import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import * as Dialog from "@radix-ui/react-dialog";

export default function Auth() {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoggingIn(!isLoggingIn);
  };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <div className="flex justify-center mb-10">
          <Dialog.Trigger asChild className="flex justify-center">
            <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
              Iniciar Sesión
            </button>
          </Dialog.Trigger>
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              {isLoggingIn ? "Iniciar Sesión" : "Regístrate"}
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] text-lg mb-5 leading-normal">
              {isLoggingIn
                ? "Debes iniciar sesión para ver los productos"
                : "Regístrate para ver los productos"}
            </Dialog.Description>
            {isLoggingIn ? (
              <Login>
                <div className="flex justify-center items-center">
                  <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:outline-none">
                    Iniciar Sesión
                  </button>
                </div>
              </Login>
            ) : (
              <Register>
                <div className="flex justify-center items-center">
                  <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:outline-none">
                    Regístrate
                  </button>
                </div>
              </Register>
            )}

            <div className="mt-[25px] flex flex-col justify-center gap-5">
              <p className="text-gray-600 text-center">
                ¿No tienes una cuenta?{" "}
                <button
                  type="button"
                  onClick={toggleLogin}
                  className="text-violet11 cursor-pointer"
                >
                  Regístrate
                </button>
              </p>
            </div>

            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                x
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
