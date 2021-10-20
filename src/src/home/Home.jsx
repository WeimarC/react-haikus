import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Home.css";

import Tarjeta from "./Tarjeta";

const Home = () => {
  return (
    <>
      <h4 className="H4">Colección</h4>
      <div id="contenedorTarjetas">
        <Tarjeta imagen="https://picsum.photos/seed/picsum/200/300" 
         fotoDePerfil="https://randomuser.me/api/portraits/men/32.jpg"
         NombreDelHaiku="nombre haiku"
         icono={faShareAlt}
        />
      </div>
    </>
  );
};

export default Home;