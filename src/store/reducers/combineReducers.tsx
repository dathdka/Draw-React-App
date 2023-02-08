import { combineReducers } from "redux";
import { reducer as authReducer } from "./authReducer";

const reducers = combineReducers({
    auth : authReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>