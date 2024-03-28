export default function Header({ name: string }) {
  return (
    <header>
      <h1 className="text-2xl text-center m-5 font-semibold mb-4">
        Bienvenido {user?.name}
      </h1>
    </header>
  );
}
