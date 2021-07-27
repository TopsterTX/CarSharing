import { GET_ORDER } from "../../Reducers/Order/order";

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
