import * as Dialog from "@radix-ui/react-dialog";

export default function AdministradorModal({
  isOpen,
  onClose,
  onChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={onClose}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Editar producto
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] text-lg mb-5 leading-normal"></Dialog.Description>
            <form>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-violet11 w-[90px] text-right text-[15px]"
                  htmlFor="email"
                >
                  Nombre
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  id="name"
                  name="name"
                  className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] bg-white"
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-violet11 w-[90px] text-right text-[15px]"
                  htmlFor="password"
                >
                  Descripcion
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  name="description"
                  id="description"
                  className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] bg-white"
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-violet11 w-[90px] text-right text-[15px]"
                  htmlFor="password"
                >
                  Precio
                </label>
                <input
                  onChange={onChange}
                  type="number"
                  name="price"
                  id="price"
                  className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] bg-white"
                />
              </fieldset>
              <div className="mt-[25px] flex justify-end">
                <button
                  // onClick={() =>
                  //   handleUpdateProduct(selectedProduct?._id, selectedProduct)
                  // }
                  className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  Actualizar
                </button>
              </div>
            </form>
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
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
