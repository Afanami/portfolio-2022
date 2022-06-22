import React from "react";
import PortfolioItem from "./PortfolioItem";
import { projects as projectsData } from "./projectsData";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectsData.map((project) => {
          return (
            <PortfolioItem
              key={project.id}
              projectName={project.name}
              projectImage={project.image}
              github={project.github}
              demo={project.demo}
            />
          );
        })}
      </div>
    </section>
  );
}
