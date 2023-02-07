import { authActions } from "../actions/authAction";

interface action {
    type: string,
    payload? : string
}
const userdetails = ''

const reducer = (state: string = userdetails, action : action) =>{
    switch(action.type){
        case "SET_USER_DETAILS":
            return {state ,
                    userdetails : action.payload}
        case "REMOVE_USER_DETAILS":
            return {state ,
                    userdetails : ''}
        default:
            return state;
    }
}