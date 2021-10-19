import React from "react";
import "./Footer.css";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="iconsFooter">
        <div className="logos">
      <LinkFooter icono={faEnvelope} texto="Contactanos" />
      <LinkFooter icono={faShare} texto="Compartir" />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
