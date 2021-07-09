const defaultState = {
  listItems: [
    {
      id: 0,
      head: "Пункт выдачи",
      result: "",
    },
    {
      id: 1,
      head: "Модель",
      result: "",
    },
  ],
};

const reduce = "CHECK-LIST_";
const CHOSE_CAR = `${reduce}CHOSE_CAR`;
const ADD_ITEM = `${reduce}ADD_ITEM`;
const UNCHOSE_CAR = `${reduce}UNCHOSE_CAR`;
const CHOSE_PLACE = `${reduce}CHOSE_PLACE`;

export const addItem = (head) => {
  return {
    type: ADD_ITEM,
    payload: [
      {
        head,
        result: "",
      },
    ],
  };
};

export const chosePlace = (city, point) => {
  return {
    type: CHOSE_PLACE,
    payload: {
      city,
      point,
    },
  };
};

export const choseCar = (model, car) => {
  return {
    type: CHOSE_CAR,
    payload: {
      model,
      car,
    },
  };
};

export const unchoseCar = () => {
  return {
    type: UNCHOSE_CAR,
    payload: "",
  };
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHOSE_CAR:
      return {
        ...state,
        listItems: state.listItems.map((el) => {
          if (el.head === "Модель") {
            return { ...el, result: payload.car + "," + " " + payload.model };
          }
          return el;
        }),
      };
    case UNCHOSE_CAR:
      return {
        ...state,
        listItems: state.listItems.map((el) => {
          if (el.head === "Модель") {
            return { ...el, result: payload };
          }
          return el;
        }),
      };
    case CHOSE_PLACE:
      return {
        ...state,
        listItems: state.listItems.map((el) => {
          if (el.head === "Пункт выдачи") {
            return { ...el, result: payload.city + "," + " " + payload.point };
          }
        }),
      };
    case ADD_ITEM: {
      return { ...state, listItems: [...state.listItems, ...payload] };
    }
    default:
      return state;
  }
};
