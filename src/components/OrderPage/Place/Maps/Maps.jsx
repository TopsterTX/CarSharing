import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Maps.scss";
import { useSelector, useDispatch } from "react-redux";
import { createPlacemark } from "../../../../redux/ActionCreators/Geocode/geocode";

export const Maps = () => {
  const { city, point, cities, points } = useSelector((state) => state.form);
  const { placemarks } = useSelector((state) => state.geocode);
  const dispacth = useDispatch();

  const [bound, setBound] = useState([
    [54.16386, 45.147574],
    [54.164914, 45.150512],
  ]);

  let map;

  //*-------------------------------------------------------------------
  //* Проверка и изменение состояний
  useEffect(() => {
    placemarks.map((el) => {
      if (
        `${city.replace(/\s+/g, "")},${point.replace(/\s+/g, "")}` ===
        el.address
      ) {
        setBound(el.bounds);
      }
    });
  }, [city, point]);

  //*--------------------------------------------------------------------

  const myGeoCode = (ymaps, map, address) => {
    ymaps
      .geocode(address, {
        results: 1,
      })
      .then((res) => {
        let firstGeoObject = res.geoObjects.get(0);
        let coords = firstGeoObject.geometry.getCoordinates();
        let bounds = firstGeoObject.properties.get("boundedBy");
        let placemark = new ymaps.Placemark(
          coords,
          {},
          {
            draggable: false,
            preset: "islands#whiteStretchyIcon",
          }
        );
        placemark.events.add("click", () => {
          setBound(bounds);
        });
        dispacth(createPlacemark(address, bounds));
        map.geoObjects.add(placemark);
      });
  };
  
  //*----------------------------------------------------------

  const init = (ymaps, map) => {
    points.map((el) => {
      myGeoCode(
        ymaps,
        map,
        `${el.cityId.name.replace(/\s+/g, "")},${el.address.replace(
          /\s+/g,
          ""
        )}`
      );
    });
  };

  //*----------------------------------------------------------

  return (
    <div className="map">
      <span className="map__title">Выбрать на карте:</span>
      <YMaps
        style={{ width: "100%", height: "100%" }}
        query={{
          ns: "use-load-option",
          apikey: "fc2d6acc-1845-4e2e-9a84-a7f43ffc96f1",
          load: "package.full",
        }}
      >
        <Map
          state={{ bounds: bound, zoom: 10 }}
          style={{ width: "100%", height: "100%", maxWidth: "736px" }}
          modules={["geocode", "geolocation"]}
          onLoad={(ymaps) => {
            ymaps.ready(() => {
              init(ymaps, map);
            });
          }}
          instanceRef={(yaMap) => {
            if (yaMap) {
              map = yaMap;
            }
          }}
        />
      </YMaps>
    </div>
  );
};
