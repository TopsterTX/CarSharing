import {
  CHANGE_COLOR,
  CHOSE_OPTIONS,
  CHOSE_COLOR,
  CHANGE_DATE_FROM,
  CHANGE_DATE_TO,
  CHANGE_ADDON,
  CHOSE_DATE_RENT,
  CHANGE_RATE,
  CHOSE_RATE,
  ADD_COLOR,
  DELETE_COLORS,
} from "../../Reducers/Options/options";

export const deleteColors = () => {
  return {
    type: DELETE_COLORS,
    payload: null,
  };
};

export const addColor = (color) => {
  return {
    type: ADD_COLOR,
    payload: color,
  };
};

export const choseOptions = (bool) => {
  return {
    type: CHOSE_OPTIONS,
    payload: bool,
  };
};

export const choseColorOptions = (bool) => {
  return {
    type: CHOSE_COLOR,
    payload: bool,
  };
};

export const choseDateRentOptions = (bool) => {
  return {
    type: CHOSE_DATE_RENT,
    payload: bool,
  };
};

export const choseRateOptions = (bool) => {
  return {
    type: CHOSE_RATE,
    payload: bool,
  };
};

export const changeColorOptions = (id, bool) => {
  return {
    type: CHANGE_COLOR,
    payload: {
      id,
      bool,
    },
  };
};

export const changeAddonOptions = (id, bool) => {
  return {
    type: CHANGE_ADDON,
    payload: {
      id,
      bool,
    },
  };
};
export const changeDateFromOptions = (value) => {
  return {
    type: CHANGE_DATE_FROM,
    payload: value,
  };
};

export const changeDateToOptions = (value) => {
  return {
    type: CHANGE_DATE_TO,
    payload: value,
  };
};

export const changeRateOptions = (id, bool) => {
  return {
    type: CHANGE_RATE,
    payload: {
      id,
      bool,
    },
  };
};
