import { Link } from "react-router-dom";

export default function AdministradorLink() {
  return (
    <div className="flex justify-center">
      <Link
        to="/administrador"
        className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
      >
        Ir a administrador
      </Link>
    </div>
  );
}
