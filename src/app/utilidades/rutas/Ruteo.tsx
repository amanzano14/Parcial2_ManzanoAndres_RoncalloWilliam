import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuCrear } from "../../componentes/menu/MenuCrear.tsx";
import { MenuListar } from "../../componentes/menu/MenuListar.tsx";
import { MenuAdmin } from "../../componentes/menu/MenuAdmin.tsx";
import { MenuActualizar } from "../../componentes/menu/MenuActualizar";
import { Acerca } from "../../componentes/otros/Acerca.tsx";
import { Comprobantes } from "../../componentes/contenedor/Comprobantes.tsx";

export const Ruteo = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Inicio />} />
        <Route path="/mencre" element={<MenuCrear />} />
        <Route path="/menlis" element={<MenuListar />} />
        <Route path="/menadmin" element={<MenuAdmin />} />
        <Route path="/menactu/: codigo" element={<MenuActualizar />} />
        <Route path="/menuacer" element={<Acerca />} />
        <Route path="*" element={<Comprobantes />} />
      </Route>
    </Routes>
  );
};
