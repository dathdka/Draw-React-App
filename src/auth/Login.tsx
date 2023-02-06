import React, {useState, useEffect, useRef} from "react";
import {Box, Button} from '@mui/material';
import CustomInput from './shared/CustomInput'
import * as customInterface from '../interface/customInterface'
import * as api from '../api'


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
        // console.log(await api.login(loginInfo))
        alert (email + password)
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


export default Login