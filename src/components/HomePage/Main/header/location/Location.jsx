import React from "react";
import "./Location.scss";
import location from '../../../../../icons/location.svg'

export const Location = () => {
  return (
    <section className="location">
      <img src={location} className="location__icon"/>
      <span className="location__place">Ульяновск</span>
    </section>
  );
};
