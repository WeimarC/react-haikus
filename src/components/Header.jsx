import React from 'react';
import "./Header.css";

const header = () => {
    return (
        <header>
            <div id="cajaBuscador">
                <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
                <img id="lupa" src="./searchIcon.svg" alt="" width="32px" height="32px" />
            </div>
        </header>
    );
}

export default header
