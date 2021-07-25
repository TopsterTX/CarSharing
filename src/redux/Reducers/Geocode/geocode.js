const defaultState = {
  placemarks: [],
};

const reduce = "GEOCODE_";
export const CREATE_PLACEMARK = `${reduce}CREATE_PLACEMARK`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CREATE_PLACEMARK:
      return {
        ...state,
        placemarks: state.placemarks.concat({
          address: payload.address,
          bounds: payload.bounds,
        }),
      };
    default:
      return state;
  }
};
