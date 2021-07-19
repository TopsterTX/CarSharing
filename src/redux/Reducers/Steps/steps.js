const defaultState = {
  steps: [
    {
      id: 0,
      text: "Местоположение",
      active: false,
      fill: false,
      path: "/order/place",
    },
    {
      id: 1,
      text: "Модель",
      active: false,
      fill: false,
      path: "/order/models",
    },
    {
      id: 2,
      text: "Дополнительно",
      active: false,
      fill: false,
      path: "/order/options",
    },
    {
      id: 3,
      text: "Итого",
      active: false,
      fill: false,
      path: "/order/total",
    },
  ],
};

const reduce = "STEPS_";
export const CHANGE_ACTIVE = `${reduce}CHANGE_ACTIVE`;
export const CHANGE_FILL = `${reduce}CHANGE_FILL`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_ACTIVE:
      return {
        ...state,
        steps: state.steps.map((el) => {
          if (el.id === payload.id) {
            return { ...el, active: payload.bool };
          }
          return el;
        }),
      };
    case CHANGE_FILL:
      return {
        ...state,
        steps: state.steps.map((el) => {
          if (el.id === payload.id) {
            return { ...el, fill: payload.bool };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};
