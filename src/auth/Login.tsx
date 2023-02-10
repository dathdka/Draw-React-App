import React, {useState} from "react";
import {Box, Button} from '@mui/material';
import CustomInput from '../shared/CustomInput'
import * as customInterface from '../interface/customInterface'
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../store";
import { RootState } from "../store/reducers/combineReducers";
import { bindActionCreators } from 'redux';
const Login: React.FC = ()  =>{
    const [email,setEmail] = useState('')
    const [password,setPass] = useState('')

    const state = useSelector((state: RootState)=> state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {login} = bindActionCreators(authAction, dispatch)

    const emailHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value as string)
    }
    const passwordHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPass(event.target.value as string)
    }
    const LoginHanle = async() =>{
        const loginInfo : customInterface.account = {
            email : email,
            username : '',
            password : password
        }
        login(loginInfo,navigate)
    }
    return (
        <>
            <h1>Login</h1>
            <Box >
                <CustomInput text="username" handler={emailHandle}/>
                <CustomInput text="password" handler={passwordHandle}/>
                <Button variant="contained" onClick={LoginHanle}>Login</Button>
            </Box>
        </>
    )
}



export default Login