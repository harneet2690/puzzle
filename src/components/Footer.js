
import React from "react"; 
import Logo from "../images/GitHub-Logo.png";
import "./Footer.scss";

const Footer = () => (
    <div className="footer-wrapper">
        <a href="javascript:void(0)">  <img src={Logo} alt="logo-img"/> </a>
        <p>React Puzzle Game Made by <strong>Harneet Singh</strong></p>
    </div>
)

export default Footer;
