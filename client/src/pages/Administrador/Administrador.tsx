import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { useGetItems } from "../../hooks";
import api from "../../service/products.service";
import { useAuthStore } from "../../store/auth.store";
import type { Product } from "../../types/product";
import { ProductTable } from "./components";

export default function Administrador() {
  const [edit, setEdit] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product
  );
  const { products, updateProducts, isLoading } = useGetItems("/products");
  const user = useAuthStore((state) => state.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOpenEditModal = (product: Product) => {
    setSelectedProduct(product);
    setEdit(true);
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const res = await api.deleteProduct(id);
      if (res.data) {
        updateProducts(products.filter((product) => product._id !== id));
        toast.success("Se elimino correctamente");
      }
    } catch (error) {
      toast.error("Ocurrio un error");
    }
  };

  const handleUpdateProduct = async (id: string, data: Product) => {
    try {
      const res = await api.updateProduct(id, data);
      if (res.data) {
        updateProducts(
          products.map((product) => (product._id === id ? data : product))
        );
        toast.success("Se actualizo correctamente");
        setEdit(false);
        setSelectedProduct({} as Product);
      }
    } catch (error) {
      toast.error("Ocurrio un error");
      setEdit(false);
      setSelectedProduct({} as Product);
    }
  };

  return (
    <>
      <header className="m-5">
        <h1 className="text-2xl text-center m-5 font-semibold mb-4">
          Bienvenido {user?.name} - Administrador
        </h1>
        <p className="text-lg text-center">
          En esta sección podrás administrar los productos de la plataforma.
        </p>
      </header>
      <main>
        {edit && (
          <Dialog.Root open={edit} onOpenChange={setEdit}>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  Editar producto
                </Dialog.Title>
                <Dialog.Description className="text-mauve11 mt-[10px] text-lg mb-5 leading-normal"></Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label
                    className="text-violet11 w-[90px] text-right text-[15px]"
                    htmlFor="email"
                  >
                    Nombre
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    value={selectedProduct?.name}
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
                    onChange={handleChange}
                    type="text"
                    name="description"
                    value={selectedProduct?.description}
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
                    onChange={handleChange}
                    type="number"
                    value={selectedProduct?.price}
                    name="price"
                    id="price"
                    className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] bg-white"
                  />
                </fieldset>
                <div className="mt-[25px] flex justify-end">
                  <button
                    onClick={() =>
                      handleUpdateProduct(selectedProduct?._id, selectedProduct)
                    }
                    className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:outline-none"
                  >
                    Actualizar
                  </button>
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
        )}

        <ProductTable
          products={products}
          isLoading={isLoading}
          onOpenEditModal={handleOpenEditModal}
          onDeleteProduct={handleDeleteProduct}
        />

        <div className="m-4 flex justify-center">
          <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            Agregar Producto
          </button>
        </div>
      </main>
    </>
  );
}
