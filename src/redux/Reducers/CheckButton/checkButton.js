const defaultState = {
  checkButton: {
    disable: true,
    path: "/order/models",
    text: "Выбрать модель",
  },
};

const reduce = "CHECK_BUTTON--";
export const CHANGE_BUTTON = `${reduce}CHANGE_BUTTON`;
export const TOGGLE_BUTTON = `${reduce}TOGGLE_BUTTON`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_BUTTON:
      return {
        ...state,
        checkButton: {
          ...state.checkButton,
          path: payload.path,
          text: payload.text,
        },
      };

    case TOGGLE_BUTTON:
      return {
        ...state,
        checkButton: {
          disable: payload,
          ...state.checkButton,
        },
      };
    default:
      return state;
  }
};
