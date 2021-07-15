const defaultState = {
  isPopupActive: false,
};

const reduce = "POPUP_";
export const CHANGE_ACTIVE = `${reduce}CHANGE_ACTIVE`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_ACTIVE:
      return { ...state, isPopupActive: payload };
    default:
      return state;
  }
};
