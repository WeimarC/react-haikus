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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dignissimos consequuntur blanditiis laborum consequatur eveniet quisquam, magni officia praesentium recusandae explicabo repellendus? Debitis doloribus beatae laudantium, deserunt sunt, architecto animi vitae expedita pariatur iure doloremque dicta! Quia similique quasi corporis nisi totam repellat, cupiditate asperiores saepe beatae, consequatur, possimus quo? Nam, libero! Odit aperiam iusto nisi inventore expedita impedit aut.
        </div>
    )
}

export default Contactanos
