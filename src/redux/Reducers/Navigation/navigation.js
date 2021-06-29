const initialState = {
  isOpenNav: false,
};

const reduce = "NAVIGATION_";
const TOGGLE_NAV = `${reduce}TOGGLE_NAV`;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_NAV:
      return { ...state, isOpenNav: payload };
  }
  return state;
};

export const toggleNav = (bool) => {
  return {
    type: TOGGLE_NAV,
    payload: bool,
  };
};
