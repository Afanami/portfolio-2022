import React from "react";
import ServiceListItem from "./ServiceListItem";

export default function Service({ serviceTitle, serviceDescriptions }) {
  const renderServiceDescriptions = () => {
    return serviceDescriptions.map((serviceDescription) => {
      return <ServiceListItem serviceDescription={serviceDescription} />;
    });
  };
  return (
    <article className="service">
      <div className="service__head">
        <h3>{serviceTitle}</h3>
      </div>

      <ul className="service__list">{renderServiceDescriptions()}</ul>
    </article>
  );
}
