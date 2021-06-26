const defaultState = {
  city: "Краснодар",
  point: "Нариманова 32",
};

const CHANGE_CITY = "CHANGE_CITY";
const CHANGE_POINT = "CHANGE_POINT";

export const changeCity = (newCityName) => {
  return {
    type: CHANGE_CITY,
    payload: newCityName,
  };
};

export const changePoint = (newPointName) => {
  return {
    type: CHANGE_POINT,
    payload: newPointName,
  };
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_CITY:
      return { ...state, city: payload };
    case CHANGE_POINT:
      return { ...state, point: payload };
  }
  return state;
};
