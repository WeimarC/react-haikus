import React from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tarjeta = ({ imagen, fotoDePerfil, NombreDelHaiku, icono }) => {
  return (
    <div className="contenedorTarjetas">
      <div className="imagenTarjeta">
        <img src={imagen} alt="/" />
      </div>
      <div className="cuerpoTarjeta">
          <img src={fotoDePerfil} alt="/" className="foto-perfil"/>
          <p className="nombre-Haiku">{NombreDelHaiku}</p>
          <FontAwesomeIcon icon={icono} className="IconoCpmpartir" />
      </div>
    </div>
  );
};

export default Tarjeta;
