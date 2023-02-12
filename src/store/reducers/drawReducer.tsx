import { drawActionInterface } from "../action-interface/drawActionInterface";
import { drawActionType } from "../action-type/drawActionType";
const initState = { drawData: { id: "", name: "", data: null }, explore: null };

export const reducer = (state = initState, action: drawActionInterface) => {
  switch (action.type) {
    case drawActionType.CREATE_NEW_BOARD:
      return {
        ...state,
        drawData: action.payload,
      };
    case drawActionType.GET_MY_COLLECTION:
      return {
        ...state,
        explore: action.payload,
      };
    default:
      return state;
  }
};
