const defaultState = {
  listItems: [
    {
      id: 0,
      name: "Пункт выдачи",
      result: "",
    },
  ],
  price: 1000 + " ₽",
};

const reduce = "CHECK-LIST_";
export const ADD_CHECK_ITEM = `${reduce}ADD_CHECK_ITEM`;
export const ADD_CHECK_RESULT = `${reduce}ADD_CHECK_RESULT`;
export const DELETE_CHECK_ITEM =`${reduce}DELETE_CHECK_ITEM`

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_CHECK_ITEM:
      return {
        ...state,
        listItems: state.listItems.concat(payload),
      };
    case DELETE_CHECK_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter((v, i) => i >= 0 && i < payload - 1)
      }
    case ADD_CHECK_RESULT:
      return {
        ...state,
        listItems: state.listItems.map((el) => {
          if (payload.id === el.id) {
            return {
              ...el,
              result: payload.result,
            };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};
