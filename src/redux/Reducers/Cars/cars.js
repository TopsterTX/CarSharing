const defaultState = {
  choseCar: "",
  isChoseModel: false,
  cars: "",
};

const reduce = "CARS_";
export const CHOSE_CAR = `${reduce}CHOSE_CAR`;
export const CHOSE_MODEL = `${reduce}CHOSE_MODEL`;
export const UNCHOSE_MODEL = `${reduce}UNCHOSE_MODEL`;
export const GET_CARS = `${reduce}GET_CARS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHOSE_MODEL:
      return {
        ...state,
        isChoseModel: true,
        cars: state.cars.map((car) => {
          if (car.id === payload && state.isChoseModel === false)
            return { ...car, active: true };
          return car;
        }),
      };

    case CHOSE_CAR: 
      return {
        ...state, 
        choseCar: payload,
      }
    case UNCHOSE_MODEL:
      return {
        ...state,
        isChoseModel: false,
        cars: state.cars.map((car) => {
          if (car.active === true && car.id === payload)
            return { ...car, active: false };
          return car;
        }),
      };

    case GET_CARS:
      return {
        ...state,
        cars: payload,
      };
    default:
      return state;
  }
};
