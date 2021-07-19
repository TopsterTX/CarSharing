import { CHANGE_BUTTON } from './../../Reducers/CheckButton/checkButton';
import { TOGGLE_BUTTON_DISABLE } from './../../Reducers/CheckButton/checkButton';

export const changeCheckButton = (path, text) => {
  return {
    type: CHANGE_BUTTON,
    payload: {
      path,
      text,
    },
  };
};

export const toggleCheckButtonDisable = (bool) => {
  return {
    type: TOGGLE_BUTTON_DISABLE,
    payload: bool
  }
}