import React from "react";
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";
import "./Main.scss";

export const Main = () => {
  return (
    <main className="main">
      <Header />
      <Content />
      <Footer />
    </main>
  );
};
