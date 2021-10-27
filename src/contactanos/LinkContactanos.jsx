import React from 'react';
import "./LinkContactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkContactanos = ({icono}) => {
    return (
        <div className="contenedorDeContacto">
            <FontAwesomeIcon icon={icono} className="IconoDeContacto" />
        </div>
    )
}

export default LinkContactanos
