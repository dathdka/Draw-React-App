import { drawActionType as actions } from "../action-type/drawActionType"
import * as customInterface from '../../interface/customInterface'
export interface createNewBoard {
    type: actions.CREATE_NEW_BOARD,
    payload? : customInterface.board
}

export interface getMyCollection {
    type: actions.GET_MY_COLLECTION,
    payload? : customInterface.board[]
}

export type drawActionInterface = createNewBoard | getMyCollection