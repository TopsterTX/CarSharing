const defaultState = {
  totalButton: {
    disable: true,
    path: "/order/models",
    text: "Выбрать модель",
  },
};

const reduce = "TOTAL_BUTTON--";
const CHANGE_BUTTON = `${reduce}CHANGE_BUTTON`;

export const changeTotalButton = (path, text) => {
  return {
    type: CHANGE_BUTTON,
    payload: {
      path,
      text,
    },
  };
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_BUTTON:
      return {
        ...state,
        totalButton: {
          path: payload.path,
          text: payload.text,
        },
      };
    default:
      return state;
  }
};
