import React from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Tarjeta = ({ imagen, fotoDePerfil, NombreDelHaiku}) => {
  return (
    <div>
      <img src={imagen} alt="" className="imagenP" />
      <div className="cuerpoTarjeta">
        <div className="fotoYTituloH">
          <img src={fotoDePerfil} alt="fotoDePerfil" className="fotoDePerfil" />
          <p className="TituloDelHaiku">{NombreDelHaiku}</p>
        </div>
        <FontAwesomeIcon icon={faShareAlt} className="icono"/>
      </div>
    </div>
  );
};

export default Tarjeta;
