const defaultState = {
  totalButton: {
    disable: true,
    path: "/order/models",
    text: "Выбрать модель",
    onClick: null
  },
};

const reduce = "TOTAL_BUTTON--";
const CHANGE_BUTTON = `${reduce}CHANGE_BUTTON`;

export const changeTotalButton = (path, text, onClick) => {
  return {
    type: CHANGE_BUTTON,
    payload: {
      path,
      text,
      onClick,
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
          onClick: payload.onClick,
        },
      };
    default:
      return state;
  }
};
