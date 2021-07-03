import elantra from "../../../images/elantra.png";
import creta from "../../../images/creta.png";
import i30n from "../../../images/i30n.png";
import sonata from "../../../images/sonata.png";

const defaultState = {
  cars: [
    {
      id: 0,
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 1,
      model: "i30 N",
      price: "10 000 - 32 000 ₽",
      img: i30n,
    },
    {
      id: 2,
      model: "CRETA",
      price: "12 000 - 25 000 ₽",
      img: creta,
    },
    {
      id: 3,
      model: "SONATA",
      price: "10 000 - 32 000 ₽",
      img: sonata,
    },
    {
      id: 4,
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 5,
      model: "i30 N",
      price: "10 000 - 32 000 ₽",
      img: i30n,
    },
    {
      id: 6,
      model: "ELANTRA",
      price: "12 000 - 25 000 ₽",
      img: elantra,
    },
    {
      id: 7,
      model: "SONATA",
      price: "10 000 - 32 000 ₽",
      img: sonata,
    },
    {
      id: 8,
      model: "i30 N",
      price: "10 000 - 32 000 ₽",
      img: i30n,
    },
  ],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
