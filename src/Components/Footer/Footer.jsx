/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      {/* <a href="#" className="footer__logo">
        Afan Ahmed
      </a> */}

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/afanahmed/"
          target="_blank"
          rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Afanami" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; Afan Ahmed. All rights reserved.</small>
      </div>
    </footer>
  );
}
