const defaultState = {
  orderStatusId: {},
  cityId: {},
  pointId: {},
  carId: {},
  color: "",
  dateFrom: 0,
  dateTo: 0,
  rateId: {},
  price: 0,
  isFullTank: true,
  isNeedChildChair: true,
  isRightWheel: true,
};

export const reduce = "ORDER_";
export const GET_ORDER = `${reduce}GET_ORDER`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ORDER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
