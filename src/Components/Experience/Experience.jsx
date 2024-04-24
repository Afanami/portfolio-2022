import React from "react";
import Skill from "./Skill";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <Skill skillName={"HTML/CSS"} skillExperience={"3+ Years"} />
            <Skill skillName={"JavaScript"} skillExperience={"3+ Years"} />
            <Skill skillName={"React"} skillExperience={"3+ Year"} />
            <Skill skillName={"TypeScript"} skillExperience={"2+ Years"} />
            <Skill skillName={"Cypress/Jest"} skillExperience={"1+ Years"} />
            <Skill skillName={"ASP.NET"} skillExperience={"2+ Years"} />
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Skill skillName={"C#"} skillExperience={"2+ Years"} />
            <Skill skillName={"SQL"} skillExperience={"3+ Years"} />
            <Skill skillName={"Node"} skillExperience={"3+ Years"} />
            <Skill skillName={"Azure"} skillExperience={"1+ Years"} />
            <Skill
              skillName={"GIT/Bitbucket VCS"}
              skillExperience={"3+ Years"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
