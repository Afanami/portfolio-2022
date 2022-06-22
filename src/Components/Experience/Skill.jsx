import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Skill({ skillName, skillExperience }) {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{skillName}</h4>
        <small className="text-light">{skillExperience}</small>
      </div>
    </article>
  );
}
