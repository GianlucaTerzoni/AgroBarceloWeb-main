import React from "react";
import './Navbar.css'


export const NavBar = () => {
  return (
    <nav className="nav">
      <div>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/MaquinasNuevas">Maquinas Nuevas</a></li>
          <li><a href="/MaquinasViejas">Maquinas Viejas</a></li>
          <li><a href="/Contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};
