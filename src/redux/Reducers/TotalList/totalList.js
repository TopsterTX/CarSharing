const defaultState = {
  listItems: [
    {
      id: 0,
      head: "Пункт выдачи",
      result: "Ульяновск, Нариманова 32",
    },
    {
      id: 1,
      head: 'Модель',
      result: '',
    }
  ],
};

const reduce = "TOTAL-LIST_";
const CHOSE_CAR = `${reduce}CHOSE_CAR`;
const ADD_ITEM = `${reduce}ADD_ITEM`;

// export const addItem = (head) => {
//   return {
//     type: ADD_ITEM,
//     payload: [
//       {
//         id: defaultState.listItems.length,
//         head,
//         result: "",
//       },
//     ],
//   };
// };

export const choseCar = (model, car) => {
  return {
    type: CHOSE_CAR,
    payload: {
      model,
      car
    },
  };
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHOSE_CAR:
      return {
        ...state,
        listItems: state.listItems.map((el) => {
          if (el.head === "Модель") {
            return { ...el, result: payload.car + ',' + ' ' + payload.model };
          }
          return el;
        }),
      };
    case ADD_ITEM: {
      return { ...state, listItems: [...state.listItems, ...payload] };
    }
    default:
      return state;
  }
};
