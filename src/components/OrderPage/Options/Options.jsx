import React from "react";
import { Color } from "./Color/Color";
import { DateRent } from "./DateRent/DateRent";
import { Rate } from "./Rate/Rate";
import { Addons } from "./Addons/Addons";
import './Options.scss'

export const Options = () => {
  return (
    <section className="options">
      <div className="options__container">
        <Color />
        <DateRent />
        <Rate />
        <Addons />
      </div>
    </section>
  );
};
