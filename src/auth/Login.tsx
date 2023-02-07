import React, {useState, useEffect, useRef} from "react";
import {Box, Button} from '@mui/material';
import CustomInput from './shared/CustomInput'
import { AppDispatch } from "../store/store";
import {connect} from 'react-redux';
import * as customInterface from '../interface/customInterface'
import * as api from '../api'
import { getActions } from "../store/actions/authAction";


const Login: React.FC = ()  =>{
    const [email,setEmail] = useState('')
    const [password,setPass] = useState('')

    const emailHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value as string)
    }
    const passwordHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPass(event.target.value as string)
    }
    const loginHanle = async() =>{
        const loginInfo : customInterface.account = {
            email : email,
            username : '',
            password : password
        }
        const userDetails = await api.login(loginInfo)
        // if(userDetails){
        //     localStorage.setItem(`token`, userDetails.token || '')
        //     localStorage.setItem(`username`, userDetails.username || '')
        // }
    }
    return (
        <>
            <h1>Login</h1>
            <Box >
                <CustomInput text="username" handler={emailHandle}/>
                <CustomInput text="password" handler={passwordHandle}/>
                <Button variant="contained" onClick={loginHanle}>Login</Button>
            </Box>
        </>
    )
}

const mapActionsToProps = (dispatch : AppDispatch) =>{
    return {
      ...getActions(dispatch).login
    }
}

export default connect(null, mapActionsToProps) (Login)