import * as Dialog from "@radix-ui/react-dialog";
import type { Product } from "../types/product";

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}) {
  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={onClose}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              {product.name}
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] text-lg mb-5 leading-normal">
              {product.description}
            </Dialog.Description>
            <article className="flex">
              <img
                src={product.image_url}
                className="w-1/2 object-contain"
                alt={product.name}
              />
              <img src={product.brand.logo_url} className="w-1/2" alt="" />
            </article>
            <article className="flex justify-end mt-2">
              <span className="text-black font-bold">${product.price}</span>
            </article>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:outline-none">
                  Comprar
                </button>
              </Dialog.Close>
            </div>
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
