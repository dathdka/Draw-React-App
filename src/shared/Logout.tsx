import { useNavigate } from "react-router-dom"
import { RootState } from "../store/reducers/combineReducers";
import { bindActionCreators } from 'redux';
import { authAction } from "../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { disconnect } from "../socket";
export const Logout : React.FC = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state : RootState) => state.auth)
    const {logout} = bindActionCreators(authAction,dispatch) 
    disconnect()
     logout(navigate)
    return (
        <></>
    )
}