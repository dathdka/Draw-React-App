import { authActionInterface } from "../action-interface/authActionInterface";
import { authActionType } from "../action-type/authActionType";

const initState = { userDetails: null };

export const reducer = (state = initState, action: authActionInterface) => {
  switch (action.type) {
    case authActionType.LOGIN:
      return { ...state, userDetails: action.payload };
    case authActionType.LOGOUT:
      return { ...state, userDetail: "" };
    default:
      return state;
  }
};
