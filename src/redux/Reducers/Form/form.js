const defaultState = {
  isChoseAddress: false,
  city: "",
  point: "",
};

const reduce = "FORM_";
export const CHANGE_CITY = `${reduce}CHANGE_CITY`;
export const CHANGE_POINT = `${reduce}CHANGE_POINT`;
export const CHOSE_ADDRESS = `${reduce}CHOSE_ADDRESS`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_CITY:
      return { ...state, city: payload };
    case CHANGE_POINT:
      return { ...state, point: payload };
    case CHOSE_ADDRESS:
      return { ...state, isChoseAddress: payload };
    default:
      return state;
  }
};
