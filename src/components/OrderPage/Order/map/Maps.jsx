import React, { useEffect } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Maps.scss";


const mapSettings = { center: [54.2794618, 48.1051445], zoom: 10 };

export const Maps = () => {
  return (
    <div className='order__map'>
      <span className='order__map-title'>Выбрать на карте:</span>
    <YMaps className='order__map'>
      <Map defaultState={mapSettings}>
        {/* <Placemark
          geometry={{
            coordinates: [55.751574, 37.573856],
          }}
        /> */}
      </Map>
    </YMaps>
    </div>
  );
};
