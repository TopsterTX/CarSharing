const defaultState = {
  isLoading: false,
  orderId: "",
};

export const reduce = "ORDER_";
export const GET_ORDER = `${reduce}GET_ORDER`;
export const POST_ORDER = `${reduce}POST_ORDER`;
export const CREATE_ORDER_ID = `${reduce}CREATE_ORDER_ID`;
export const CHANGE_IS_LOADING = `${reduce}CHANGE_IS_LOADING`

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ORDER:
      return {
        ...state,
      };
    case POST_ORDER:
      return {};
    case CREATE_ORDER_ID:
      return {
        ...state,
        orderId: payload,
      };
    case CHANGE_IS_LOADING:
      return{
        ...state,
        isLoading: payload
      }
    default:
      return state;
  }
};
