import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="iconsFooter">
          <div className="logos">
            <ul>
              <li>
                <img src="email.svg" alt="" className="email" />
              </li>
              <li>
                <img src="share.svg" alt="" className="share" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
