import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { CrearPrestamo } from "../../componentes/clientes/CrearPrestamo.tsx";
import { ListarClientes } from "../../componentes/clientes/ListaClientes.tsx";
import { MenuAdmin } from "../../componentes/clientes/MenuAdmin.tsx";
import { ActualizarPrestamo } from "../../componentes/clientes/ActualizarPrestamo.tsx";
import { Acerca } from "../../componentes/otros/Acerca.tsx";
import { Comprobantes } from "../../componentes/contenedor/Comprobantes.tsx";

export const Ruteo = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Inicio />} />
        <Route path="/mencre" element={<CrearPrestamo />} />
        <Route path="/menlis" element={<ListarClientes />} />
        <Route path="/menadmin" element={<MenuAdmin />} />
        <Route path="/menactu/: codigo" element={<ActualizarPrestamo />} />
        <Route path="/menuacer" element={<Acerca />} />
        <Route path="*" element={<Comprobantes />} />
      </Route>
    </Routes>
  );
};
