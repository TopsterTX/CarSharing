import React from "react";
import { YMaps, Map } from "react-yandex-maps";

import "./Maps.scss";

const mapSettings = { center: [54.2794618, 48.1051445], zoom: 10 };

export const Maps = () => {
  return (
    <div className="map">
      <span className="map__title">Выбрать на карте:</span>
      <YMaps style={{ width: "100%", height: "100%" }}>
        <Map
          defaultState={mapSettings}
          style={{ width: "100%", height: "100%", maxWidth: "736px" }}
        />
      </YMaps>
    </div>
  );
};
