import React from "react";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BiCodeAlt } from "react-icons/bi";
import ME from "../../assests/aboutme2.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>BE(HONS) Mechatronics Engineering 2020</small>
            </article>

            <article className="about__card">
              <BiCodeAlt className="about__icon" />
              <h5>Favourite Language</h5>
              <small>JavaScript</small>
            </article>
          </div>

          <p>
            Hi I'm Afan, a Software Developer working in the industry for 3
            years. I have a strong passion for building aesthetic user
            interfaces with seamless user experieces tied to them. My favourite
            technologies to work with are React on the frontend with a SQL
            backend. But ofcourse it all depends on the project needs! If you're
            looking to get reach out, get something built or just have a chat...
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Afan Ahmed" />
          </div>
        </div>
      </div>
    </section>
  );
}
