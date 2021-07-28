import {
  GET_ORDER,
  POST_ORDER,
  CREATE_ORDER_ID,
  CHANGE_IS_LOADING,
} from "../../Reducers/Order/order";

export const getOrder = () => async (dispatch) => {
  try {
    await fetch("https://api-factory.simbirsoft1.com/api/db/order", {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (e) {
    console.error(e);
  }
};

export const postOrder = (order) => async (dispatch) => {
  try {
    await fetch("https://api-factory.simbirsoft1.com/api/db/order", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res)
      .then((res) => dispatch({ type: CHANGE_IS_LOADING, payload: false }));
  } catch (e) {
    console.error(e);
  }
};

export const createOrderId = (id) => {
  return {
    type: CREATE_ORDER_ID,
    payload: id,
  };
};

export const changeIsLoading = (bool) => {
  return {
    type: CHANGE_IS_LOADING,
    payload: bool,
  };
};
