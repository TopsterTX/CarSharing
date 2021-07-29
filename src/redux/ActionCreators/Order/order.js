import {
  GET_ORDER,
  POST_ORDER,
  CREATE_ORDER_ID,
  CHANGE_IS_LOADING,
  CHANGE_IS_GET_ORDER,
  GET_ORDER_ID,
} from "../../Reducers/Order/order";
import { CHANGE_CONFIRM_ORDER } from "../../Reducers/Total/total";

export const getOrder = (id) => async (dispatch) => {
  try {
    await fetch(
      `https://api-factory.simbirsoft1.com/api/db/order&data_id=${id}`,
      {
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: CHANGE_IS_GET_ORDER, payload: true });
      });
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
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        dispatch({ type: CHANGE_IS_LOADING, payload: false });
        dispatch({ type: GET_ORDER_ID, payload: res.data.id });
        dispatch({ type: CHANGE_CONFIRM_ORDER, payload: true });
      });
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

export const changeIsGetOrder = (bool) => {
  return {
    type: CHANGE_IS_GET_ORDER,
    payload: bool,
  };
};
