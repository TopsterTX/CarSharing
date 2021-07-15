const initialState = {
  isOpenNav: false,
};

const reduce = "NAVIGATION_";
export const TOGGLE_NAV = `${reduce}TOGGLE_NAV`;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_NAV:
      return { ...state, isOpenNav: payload };
  }
  return state;
};

