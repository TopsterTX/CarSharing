import React from "react";
import "./Social.scss";

export const Social = () => {
  return (
    <section className="social">
      <a
        href="#"
        target="_blank"
        className="social__icon social__icon--telegram"
      >
        <img src="../../../../../icons/Telegram_white.svg" alt="" />
      </a>
      <a
        href="#"
        target="_blank"
        className="social__icon social__icon--facebook"
      >
        <img src="../../../../../icons/Facebook_white.svg" alt="" />
      </a>
      <a
        href="#"
        target="_blank"
        className="social__icon social__icon--instagram"
      >
        <img src="../../../../../icons/Instagram_white.svg" alt="" />
      </a>
    </section>
  );
};
