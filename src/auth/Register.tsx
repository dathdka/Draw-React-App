import React, { useState } from 'react'
import CustomIntput from './shared/CustomInput'
import {Box, Button} from '@mui/material';
import * as customInterface from '../interface/customInterface'
const Register : React.FC = () =>{
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPass] = useState('')
    const emailHandle = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setEmail (event.target.value as string)
    }
    const usernameHandle = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setUsername (event.target.value as string)
    }
    const passwordHandle = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setPass (event.target.value as string)
    }

    const registerHandle = () =>{
        const registerInfo : customInterface.account = {
            email : email,
            username : username,
            password : password
        }

        console.log(registerInfo)
    }

    return (
        <Box>
        <h1>Register</h1>
            <CustomIntput text='email' handler={emailHandle}/>
            <CustomIntput text='username' handler={usernameHandle}/>
            <CustomIntput text='password' handler={passwordHandle}/>
            <Button onClick={registerHandle}>Register</Button>
        </Box>
    )
}

export default Register