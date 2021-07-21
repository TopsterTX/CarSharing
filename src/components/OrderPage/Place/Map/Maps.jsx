import React, { useEffect } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Maps.scss";
import { useSelector } from "react-redux";
import Geocode from "react-geocode";

Geocode.setLanguage("ru");
Geocode.setRegion("ru");
Geocode.setLocationType("ROOFTOP");

Geocode.enableDebug();

const mapSettings = { center: [54.2794618, 48.1051445], zoom: 10 };

export const Maps = () => {
  const { city, point, cities, points } = useSelector((state) => state.form);
  useEffect(() => {
    Geocode.fromLatLng("48.8583701", "2.2922926").then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );

    console.log(Geocode);
  }, []);

  return (
    <div className="map">
      <span className="map__title">Выбрать на карте:</span>
      <YMaps style={{ width: "100%", height: "100%" }}>
        <Map
          defaultState={mapSettings}
          style={{ width: "100%", height: "100%", maxWidth: "736px" }}
        >
          <Placemark geometry={[54.2794618, 48.1051445]} />;
        </Map>
      </YMaps>
    </div>
  );
};
