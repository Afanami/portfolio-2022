import React from "react";
import Service from "./Service";
import "./Services.css";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <Service
          serviceTitle={"Some Service..."}
          serviceDescriptions={["Fill later if using this section one day"]}
        />
        <Service
          serviceTitle={"Web Development"}
          serviceDescriptions={[
            "Fill later if using this section one day",
            "Fill later if using this section one day",
          ]}
        />
        <Service
          serviceTitle={"Some Service..."}
          serviceDescriptions={["Fill later if using this section one day"]}
        />
      </div>
    </section>
  );
}
