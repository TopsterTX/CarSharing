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
export const CHOSE_CAR = `${reduce}CHOSE_CAR`;
export const ADD_ITEM = `${reduce}ADD_ITEM`;
export const UNCHOSE_CAR = `${reduce}UNCHOSE_CAR`;
export const CHOSE_PLACE = `${reduce}CHOSE_PLACE`;

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
