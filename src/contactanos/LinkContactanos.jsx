import React from 'react';
import "./LinkContactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkContactanos = ({icono, texto}) => {
    return (
        <div className="contenedorDeContacto">
            <FontAwesomeIcon icon={icono} className="IconoDeContacto" />
            <div className="textoContacto">{texto}</div>
        </div>
    )
}

export default LinkContactanos
