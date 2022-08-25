import React from "react";
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <Link to="/Inicio">Inicio</a>
      <a href="#Maquinas Nuevas">Maquinas Nuevas</a>
      <a href="#Maquinas Viejas">Maquinas Viejas</a>
      <a href="#Contacto">Contacto</a>
    </div>
  );
};
