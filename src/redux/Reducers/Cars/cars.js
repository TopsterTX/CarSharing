const defaultState = {
  price: '',
  choseCar: "",
  isChoseModel: false,
  cars: [],
};

const reduce = "CARS_";
export const CHOSE_CAR = `${reduce}CHOSE_CAR`;
export const CHOSE_MODEL = `${reduce}CHOSE_MODEL`;
export const UNCHOSE_MODEL = `${reduce}UNCHOSE_MODEL`;
export const GET_CARS = `${reduce}GET_CARS`;
export const CHANGE_ACTIVE_CARS = `${reduce}CHANGE_ACTIVE_CARS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHOSE_MODEL:
      return {
        ...state,
        isChoseModel: true,
      };

    case CHOSE_CAR:
      return {
        ...state,
        choseCar: payload,
      };

    case UNCHOSE_MODEL:
      return {
        ...state,
        isChoseModel: false,
      };

    case GET_CARS:
      return {
        ...state,
        cars: state.cars.concat(payload),
      };

    case CHANGE_ACTIVE_CARS:
      return {
        ...state,
        cars: state.cars.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              active: payload.bool,
            };
          }
          return el;
        }),
      };

    default:
      return state;
  }
};
