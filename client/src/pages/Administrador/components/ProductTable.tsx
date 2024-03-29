import Skeleton from "react-loading-skeleton";
import type { Product } from "../../../types/product";

type Props = {
  isLoading: boolean;
  products: Product[];
  onOpenEditModal: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
};

function ProductTable({
  isLoading,
  products,
  onOpenEditModal,
  onDeleteProduct,
}: Props) {
  return (
    <div className="overflow-x-auto text-black">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-purple-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-purple-600 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-purple-600 uppercase tracking-wider">
              Descripción
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-purple-600 uppercase tracking-wider">
              Precio
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-purple-600 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {!isLoading ? (
            <tr>
              <td className="px-6 py-4" colSpan={4}>
                <Skeleton count={10} height={100} width={1200} />
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.name}>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button
                    className="text-xs text-blue-600 font-bold hover:underline focus:outline-none"
                    onClick={() => onOpenEditModal(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="text-xs text-red-600 font-bold hover:underline focus:outline-none"
                    onClick={() => onDeleteProduct(product._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
