import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <main>
			<Link to="/Home" className="Inicio" ><h1 className="H1">Haikus</h1></Link>
	     {children}
    </main>
  );
};

export default Main;