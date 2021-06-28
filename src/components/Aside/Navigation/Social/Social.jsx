import React from "react";
import "./Social.scss";
import telegram from "../../../../icons/Telegram_white.svg";
import facebook from "../../../../icons/Facebook_white.svg";
import instagram from "../../../../icons/Instagram_white.svg";

export const Social = () => {
  return (
    <section className="social">
      <a
        href="#"
        target="_blank"
        className="social__icon social__icon--telegram"
      >
        <img src={telegram} alt="" />
      </a>
      <a
        href="#"
        target="_blank"
        className="social__icon social__icon--facebook"
      >
        <img src={facebook} alt="" />
      </a>
      <a
        href="#"
        target="_blank"
        className="social__icon social__icon--instagram"
      >
        <img src={instagram} alt="" />
      </a>
    </section>
  );
};
