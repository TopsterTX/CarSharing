import { TOGGLE_NAV } from "../../Reducers/Navigation/navigation";
export const toggleNav = (bool) => {
  return {
    type: TOGGLE_NAV,
    payload: bool,
  };
};
