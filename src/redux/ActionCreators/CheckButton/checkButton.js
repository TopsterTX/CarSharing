import { CHANGE_BUTTON } from './../../Reducers/CheckButton/checkButton';

export const changeCheckButton = (path, text) => {
  return {
    type: CHANGE_BUTTON,
    payload: {
      path,
      text,
    },
  };
};
