import { CHANGE_BUTTON } from './../../Reducers/CheckButton/checkButton';
import { TOGGLE_BUTTON } from './../../Reducers/CheckButton/checkButton';

export const changeCheckButton = (path, text) => {
  return {
    type: CHANGE_BUTTON,
    payload: {
      path,
      text,
    },
  };
};

export const toggleCheckButton = (bool) => {
  return {
    type: TOGGLE_BUTTON,
    payload: bool
  }
}