import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        ZHYLDYZ_ZHOLD
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/jyldyz.joldoshova" target="blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/zhyldyz_zhold/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/joldoshova" target="blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Zhyldyz Zholdoshova. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
