import { CHANGE_DISABLE } from "../../Reducers/Steps/steps"


export const changeDisable = (id, bool) => {
  return {
    type: CHANGE_DISABLE,
    payload: {
      id,
      bool
    }
  }
}
