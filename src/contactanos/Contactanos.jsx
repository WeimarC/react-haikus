import React from 'react'
import "./Contactanos.css";
import LinkContactanos from "./LinkContactanos";
import { faFacebook, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contactanos = () => {
    return (
        <div className="iconsContacto">
            <div className="icons">
                <LinkContactanos icono={faFacebook} className="iconFace" />
                <LinkContactanos icono={faEnvelope} className="iconEmail" />
                <LinkContactanos icono={faInstagramSquare} className="iconInstagram" />
                
            </div> 
                <div className="text">
                    <p className="texto" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, vel nam! Aliquid quam minima incidunt perferendis modi, impedit repellat ex a harum eius et non! Perferendis adipisci id eaque cupiditate.Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
        </div>
    )
}

export default Contactanos
