import React from "react";
import "./Footer.css";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="iconsFooter">
        <div className="logos">
        <Link to="/Contactanos" className="contactar"><LinkFooter icono={faEnvelope} texto="Contactanos" /></Link>
        <Link to="/Home/Compartir" className="contactar"><LinkFooter icono={faShare} texto="Compartir" /></Link>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
