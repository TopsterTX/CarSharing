import React, { useEffect, useState } from "react";
import { Navigation } from "../../HomePage/Main/navigation/Navigation";
import { Form } from "./form/Form";
import { Maps } from "./map/Maps";
import { Total } from "./total/Total";
import "./Order.scss";

export const Order = () => {
  const [city, setCity] = useState("Ульяновск");
  const [point, setPoint] = useState("Нариманова 32");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (city.length !== 0) {
      setDisabled(false);
    } else{
      setDisabled(true)
    }
  }, [city]);

  return (
    <section className="order">
      <div className="order__container">
        <div className="order__order-block">
          <Form
            city={city}
            setCity={setCity}
            point={point}
            setPoint={setPoint}
            disabled={disabled}
          />
          <Maps />
          <Navigation />
        </div>
        <div className="order__total-block">
          <Total disabled={disabled} setDisabled={setDisabled} city={city} point={point} />
        </div>
      </div>
    </section>
  );
};
