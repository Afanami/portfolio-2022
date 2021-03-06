/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiSlideshowLine } from "react-icons/ri";
// import { RiServiceLine } from "react-icons/ri";
import "./Nav.css";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}>
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}>
        <RiSlideshowLine />
      </a>
      {/* <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}>
        <RiServiceLine />
      </a> */}
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
