const defaultState = {
  steps: [
    {
      id: 0,
      text: "Местоположение",
      disable: false,
      fill: false,
      path: "/order/place",
    },
    {
      id: 1,
      text: "Модель",
      disable: false,
      fill: false,
      path: "/order/models",
    },
    {
      id: 2,
      text: "Дополнительно",
      disable: false,
      fill: false,
      path: "/order/options",
    },
    {
      id: 3,
      text: "Итого",
      disable: false,
      fill: false,
      path: "/order/total",
    },
  ],
};

const reduce = "STEPS_";
export const CHANGE_DISABLE = `${reduce}CHANGE_DISABLE`;
export const CHANGE_FILL = `${reduce}CHANGE_FILL`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_DISABLE:
      return {
        ...state,
        steps: state.steps.map((el) => {
          if (el.id === payload.id) {
            return { ...el, disable: payload.bool };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};
