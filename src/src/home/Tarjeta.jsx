import React, { useState } from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Tarjeta = ({ imagen, fotoDePerfil, NombreDelHaiku, haiku}) => {
  const [invisible, setInvisible] = useState(true);

 

  const cambiarVisibilidad = () => {
    if( invisible === false  ) {
      setInvisible(true);
    }else if( invisible === true ) {
      setInvisible(false);
    }
  }


  return (
    <div>
      <div className="imagenYHaiku" onClick={cambiarVisibilidad}>
      <p className="Haiku" style={{ display: invisible ? "none" : "block" }}> {haiku} </p>
      <motion.img src={imagen} alt="/" className="imagenP" whileTap={{ scale: 0.8 }}/>
      </div>
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

