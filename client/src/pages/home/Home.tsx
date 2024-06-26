import { useState } from "react";
import { ItemList, SkeletonProducts } from "../../components";
import { useGetItems, useInfiniteScroll } from "../../hooks";
import { useAuthStore } from "../../store/auth.store";
import type { Product } from "../../types/product";
import {
  AdministradorLink,
  Auth,
  Logout,
  ProductModal,
  Scroll,
} from "./components";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { products, isLoading } = useGetItems("/products");
  const { numProductsToShow, ref } = useInfiniteScroll();
  const user = useAuthStore((state) => state.user);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setOpen(false);
  };

  return (
    <>
      <header className="mt-10 mb-7 flex flex-col gap-2">
        <h1 className="text-center text-xl font-bold">
          Challenge - Story dots
        </h1>
        <h2 className="text-center text-lg font-bold">Nuestros Productos</h2>
        <p className="text-center text-sm mt-3 w-1/2 m-auto">
          **Nota:** Si experimentas retrasos en la carga de los productos debido
          a las limitaciones de la instancia gratuita, espera unos momentos
          mientras se reactiva.
        </p>
      </header>

      {user ? (
        <section className="flex justify-center items-center gap-3 m-5">
          <AdministradorLink />
          <Logout />
        </section>
      ) : (
        <Auth />
      )}

      {selectedProduct && (
        <ProductModal
          isOpen={open}
          onClose={closeProductModal}
          product={selectedProduct}
        />
      )}

      <main className="w-full lg:w-3/4 m-auto">
        <div>
          {!isLoading && (
            <SkeletonProducts numProductsToShow={numProductsToShow} />
          )}

          <ItemList
            list={products}
            extractId={(product) => product._id}
            className="W-full flex flex-wrap justify-center items-center gap-y-8 gap-x-2"
            classNameItem="flex flex-col w-1/3 h-[400px] items-center gap-4 border rounded-md p-4 shadow-md bg-white text-black"
            numProductsToShow={numProductsToShow}
            renderList={(product) => (
              <>
                <img
                  className="w-[300px] h-[200px] object-contain rounded-md"
                  src={product.image_url}
                  alt={product.name}
                />
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">Marca: {product.brand.name}</p>
                <p className="text-gray-600 font-semibold">${product.price}</p>
                <button
                  onClick={() => {
                    setOpen(true);
                    handleSelectProduct(product);
                  }}
                  className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                >
                  Ver detalles
                </button>
              </>
            )}
          />

          <Scroll ref={ref} />
        </div>
      </main>
    </>
  );
}
