import elantra from "../../../images/elantra.png";
import creta from "../../../images/creta.png";
import i30n from "../../../images/i30n.png";
import sonata from "../../../images/sonata.png";

const defaultState = {
  isChoseModel: false,
  cars: [
    {
      id: 0,
      active: false,
      car: 'Hyndai',
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 1,
      active: false,
      car: 'Hyndai',
      model: "i30 N",
      price: "10 000 - 32 000 ₽",
      img: i30n,
    },
    {
      id: 2,
      active: false,
      car: 'Hyndai',
      model: "CRETA",
      price: "12 000 - 25 000 ₽",
      img: creta,
    },
    {
      id: 3,
      active: false,
      car: 'Hyndai',
      model: "SONATA",
      price: "10 000 - 32 000 ₽",
      img: sonata,
    },
    {
      id: 4,
      active: false,
      car: 'Hyndai',
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 5,
      active: false,
      car: 'Hyndai',
      model: "i30 N",
      price: "10 000 - 32 000 ₽",
      img: i30n,
    },
    {
      id: 6,
      active: false,
      car: 'Hyndai',
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 7,
      active: false,
      car: 'Hyndai',
      model: "SONATA",
      price: "10 000 - 32 000 ₽",
      img: sonata,
    },
  ],
};

const reduce = "CARS_";
export const CHOSE_MODEL = `${reduce}CHOSE_MODEL`;
export const UNCHOSE_MODEL = `${reduce}UNCHOSE_MODEL`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHOSE_MODEL:
      return {
        ...state,
        isChoseModel: true,
        cars: state.cars.map((car) => {
          if (car.id === payload && state.isChoseModel === false)
            return { ...car, active: true };
          return car;
        }),
      };

    case UNCHOSE_MODEL:
      return {
        ...state,
        isChoseModel: false, 
        cars: state.cars.map((car) => {
          if (
            car.active === true &&
            car.id === payload
          )
            return { ...car, active: false };
          return car;
        }),
      };

    default:
      return state;
  }
};
