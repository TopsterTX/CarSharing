const defaultState = {
  isLoading: false,
  statusOrderIdArray: [],
  isGetOrder: false,
  orderId: "",
};

export const reduce = "ORDER_";
export const GET_ORDER_STATUS_ID = `${reduce}GET_ORDER_STATUS_ID`;
export const GET_ORDER = `${reduce}GET_ORDER`;
export const POST_ORDER = `${reduce}POST_ORDER`;
export const CREATE_ORDER_ID = `${reduce}CREATE_ORDER_ID`;
export const CHANGE_IS_LOADING = `${reduce}CHANGE_IS_LOADING`;
export const CHANGE_IS_GET_ORDER = `${reduce}CHANGE_IS_GET_ORDER`;
export const GET_ORDER_ID = `${reduce}GET_ORDER_ID`;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ORDER:
      return {
        ...state,
      };
    case GET_ORDER_STATUS_ID:
      return {
        ...state,
        statusOrderIdArray: payload,
      };
    case POST_ORDER:
      return state;
    case CREATE_ORDER_ID:
      return {
        ...state,
        statusOrderId: payload,
      };
    case GET_ORDER_ID:
      return {
        ...state,
        orderId: payload,
      };
    case CHANGE_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case CHANGE_IS_GET_ORDER:
      return {
        ...state,
        isGetOrder: payload,
      };
    default:
      return state;
  }
};
