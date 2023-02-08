import { authActionType as actions } from "../action-type/authActionType";

export interface loginAction {
    type: actions.LOGIN,
    payload: string
}


export interface logoutAction {
    type: actions.LOGOUT
    payload?: ''
}

export type authActionInterface = loginAction | logoutAction;