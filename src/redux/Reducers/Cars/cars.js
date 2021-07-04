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
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 1,
      active: false,
      model: "i30 N",
      price: "10 000 - 32 000 ₽",
      img: i30n,
    },
    {
      id: 2,
      active: false,
      model: "CRETA",
      price: "12 000 - 25 000 ₽",
      img: creta,
    },
    {
      id: 3,
      active: false,
      model: "SONATA",
      price: "10 000 - 32 000 ₽",
      img: sonata,
    },
    {
      id: 4,
      active: false,
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 5,
      active: false,
      model: "i30 N",
      price: "10 000 - 32 000 ₽",
      img: i30n,
    },
    {
      id: 6,
      active: false,
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 7,
      active: false,
      model: "SONATA",
      price: "10 000 - 32 000 ₽",
      img: sonata,
    },
  ],
};

const reduce = "CARS_";
const CHOSE_MODEL = `${reduce}CHOSE_MODEL`;
const UNCHOSE_MODEL = `${reduce}UNCHOSE_MODEL`;

export const choseModel = (id) => {
  return {
    type: CHOSE_MODEL,
    payload: id,
  };
};

export const unchoseModel = (id) => {
  return {
    type: UNCHOSE_MODEL,
    payload: id,
  };
};

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
