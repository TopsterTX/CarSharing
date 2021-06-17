import React from "react";
import "./Menu.scss";

export const Menu = ({className, id}) => {
  return (
    <section className={className} id={id} onClick={(e) => {
      document.getElementById('nav').classList.toggle('active')
      document.body.classList.toggle('--lock')
      document.getElementById(id).classList.toggle('active')
      
    }}>
      <span></span>
      <span></span>
      <span></span>
    </section>
  );
};
