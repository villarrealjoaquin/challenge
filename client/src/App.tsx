import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { useVerifyToken } from "./hooks";
import { AuthGuard, RouterWithNotFound } from "./utils";

const Home = lazy(() => import("./pages/home/Home"));
const Administrador = lazy(() => import("./pages/Administrador/Administrador"));

function App() {
  useVerifyToken();
  return (
    <>
      <Suspense fallback={<>Cargando...</>}>
        <RouterWithNotFound>
          <Route path="/" element={<Home />} />
          <Route element={<AuthGuard />}>
            <Route path="/administrador" element={<Administrador />} />
          </Route>
        </RouterWithNotFound>
      </Suspense>
    </>
  );
}

export default App;
