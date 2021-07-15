const defaultState = {
  checkButton: {
    disable: true,
    path: "/order/models",
    text: "Выбрать модель",
  },
};

const reduce = "CHECK_BUTTON--";
export const CHANGE_BUTTON = `${reduce}CHANGE_BUTTON`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_BUTTON:
      return {
        ...state,
        checkButton: {
          path: payload.path,
          text: payload.text,
        },
      };
    default:
      return state;
  }
};
