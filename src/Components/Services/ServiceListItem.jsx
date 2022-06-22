import React from "react";
import { BiCheck } from "react-icons/bi";

export default function ServiceListItem({ serviceDescription }) {
  return (
    <li>
      <BiCheck className="service__list-icon" />
      <p>{serviceDescription}</p>
    </li>
  );
}
