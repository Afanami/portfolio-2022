import React from "react";
import cv from "../../assests/cv.pdf";
import ME from "../../assests/me.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Afan Ahmed</h1>
        <h5 className="text-light">Full-Stack Software Engineer</h5>

        <div className="cta">
          <a href={cv} download="afan-ahmed-cv" className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/afanahmed/"
            target="_blank"
            rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Afanami" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

        <div className="me">
          <img src={ME} alt="Afan Ahmed" loading="lazy" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
