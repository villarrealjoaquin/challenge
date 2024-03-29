import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { Footer } from "./components";
import { AuthGuard, RouterWithNotFound } from "./utils";
import { useVerifyToken } from "./hooks";

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
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
