import { BASE_URL } from "./../../../constants";

import {
  CHANGE_CITY,
  CHANGE_POINT,
  GET_CITIES,
  GET_POINTS,
  CHOSE_ADDRESS,
} from "../../Reducers/Place/place";

export const changeCity = (value) => {
  return {
    type: CHANGE_CITY,
    payload: value,
  };
};

export const changePoint = (value) => {
  return {
    type: CHANGE_POINT,
    payload: value,
  };
};

export const choseAddress = (bool) => {
  return {
    type: CHOSE_ADDRESS,
    payload: bool,
  };
};

export const getCities = () => async (dispatch) => {
  try {
    await fetch(`https://api-factory.simbirsoft1.com/api/db/city`, {
      headers: {
        'X-Api-Factory-Application-Id' : '5e25c641099b810b946c5d5b',
      }
    })
      .then(res => res.json())
      .then(res => dispatch({type: GET_CITIES, payload: res.data}))
  } catch (e) {
    console.error(e);
  }
};


export const getPoints = () => async(dispatch) => {
  try{
    await fetch(`https://api-factory.simbirsoft1.com/api/db/point?limit=13`, {
      headers: {
        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
      }
    })
      .then(res => res.json())
      .then(res => dispatch({type: GET_POINTS, payload: res.data}))
  } catch(e){
    console.error(e);
  }
}