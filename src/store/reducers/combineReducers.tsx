import { combineReducers } from "redux";
import { reducer as authReducer } from "./authReducer";
import { reducer as drawReducer } from "./drawReducer";
const reducers = combineReducers({
    auth : authReducer,
    draw : drawReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>