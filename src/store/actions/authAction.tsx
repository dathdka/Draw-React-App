import { Dispatch } from "redux";
import * as customInterface from "../../interface/customInterface";
import { NavigateFunction } from "react-router-dom";
import { authActionType } from "../action-type/authActionType";
import { authActionInterface } from "../action-interface/authActionInterface";
import * as api from "../../api";

export const login = (
  userDetails: customInterface.account,
  navigate: NavigateFunction
) => {
  return async (dispatch: Dispatch<authActionInterface>) => {
    const response = await api.login(userDetails);
    if(response){
      userDetails = {
        id: response?.data["id"],
        token: response?.data["token"],
        username: response?.data["username"],
      };
      localStorage.setItem(`id`, userDetails.id || "");
      localStorage.setItem(`token`, userDetails.token || "");
      localStorage.setItem(`username`, userDetails.username || "");
      dispatch({
        type: authActionType.LOGIN,
        payload: JSON.stringify(userDetails)
      });
      navigate("/dashboard");
    }
  };
};

export const register = (userDetails : customInterface.account, navigate : NavigateFunction) =>{
  return async (dispatch : Dispatch) => {
    const response = await api.register(userDetails)
    if(response){
      userDetails = {
        id: response?.data["id"],
        token: response?.data["token"],
        username: response?.data["username"],
      };
      localStorage.setItem(`id`, userDetails.id || "");
      localStorage.setItem(`token`, userDetails.token || "");
      localStorage.setItem(`username`, userDetails.username || "");
      alert('register successfully')
      dispatch({
        type: authActionType.LOGIN,
        payload: JSON.stringify(userDetails)
      });
      navigate("/dashboard");
    }
  }
}

export const logout = (navigate : NavigateFunction) =>{
  return async (dispatch : Dispatch) =>{
    await api.logout()
    localStorage.removeItem(`id`)
    localStorage.removeItem(`token`)
    localStorage.removeItem(`username`)
    dispatch({
      type : authActionType.LOGOUT
    })
  }
}
