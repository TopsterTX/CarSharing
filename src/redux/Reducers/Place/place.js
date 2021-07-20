const defaultState = {
  isChoseAddress: false,
  city: "",
  point: "",
  cities: [],
  points: [],
};

const reduce = "PLACE_";
export const CHANGE_CITY = `${reduce}CHANGE_CITY`;
export const CHANGE_POINT = `${reduce}CHANGE_POINT`;
export const CHOSE_ADDRESS = `${reduce}CHOSE_ADDRESS`;
export const GET_CITIES = `${reduce}GET_CITIES`;
export const GET_POINTS = `${reduce}GET_POINTS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_CITY:
      return { ...state, city: payload };
    case CHANGE_POINT:
      return { ...state, point: payload };
    case CHOSE_ADDRESS:
      return { ...state, isChoseAddress: payload };
    case GET_CITIES:
      return { ...state, cities: payload };
    case GET_POINTS:
      return { ...state, points: payload };
    default:
      return state;
  }
};
