const defaultState = {
  cityGeocode: "",
  pointGeocode: "",
};

const reduce = "GEOCODE_";
export const CHOSE_CITY = `${reduce}CHOSE_CITY`;
export const CHOSE_POINT = `${reduce}CHOSE_POINT`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHOSE_CITY:
      return {
        ...state,
        cityGeocode: payload,
      };
    case CHOSE_POINT:
      return {
        ...state,
        pointGeocode: payload,
      };
    default:
      return state;
  }
};
