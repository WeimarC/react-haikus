import React from "react";
import "./Footer.css";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Compartir from "./Compartir";

const Footer = () => {
 
  return (
    <footer>
      <div className="iconsFooter">
        <div className="logos">
        <Link to="/Contactanos" className="contactar"><LinkFooter icono={faEnvelope} texto="Contactanos" /></Link>
        <Compartir><LinkFooter onclick={Compartir} icono={faShare} texto="Compartir"/></Compartir>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
