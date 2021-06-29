import React from "react";
import { Main } from "./Main/Main";
import Slider from "./Slider/Slider";
import "./HomePage.scss";

export const HomePage = ({isOpenNav, setIsOpenNav}) => {
  return (
    <section className="home-page">
      <Main setIsOpenNav={setIsOpenNav} isOpenNav={isOpenNav} />
      <Slider />
    </section>
  );
};
