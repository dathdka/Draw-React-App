import { Action } from 'redux'
import * as api from '../../api'
import * as customInterface from '../../interface/customInterface'
import React from 'react'
import { NavigateFunction } from 'react-router-dom'
import { AppDispatch } from '../store'
export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
}

export const getActions = (dispatch: AppDispatch) =>{
    return{
        login:(userDetails: customInterface.account, navigate: NavigateFunction)=> dispatch(login(userDetails,navigate))
    }
} 


const login = (userDetails : customInterface.account  , navigate: NavigateFunction) =>{
    return async (dispatch: AppDispatch) =>{
        const response = await api.login(userDetails)
        if(response?.data){
            userDetails = response?.data
            localStorage.setItem(`token`, userDetails.token || '')
            localStorage.setItem(`username`, userDetails.username|| '')
            console.log(userDetails)
            navigate('/dashboard')
        }
    }
}

const setUserDetails = (userDetails: customInterface.account) =>{
    return{
        type: authActions.SET_USER_DETAILS,
        userDetails
    }
}