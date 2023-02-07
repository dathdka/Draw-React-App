import axios, { Axios, AxiosResponse } from "axios";
import * as customInterface from './interface/customInterface'
import { ServerResponse } from "http";
const api = axios.create({
    baseURL: 'http://localhost:1234',
    timeout: 30000
})

api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
      return config;
    },
    (error) => {
        console.log('something went wrong')
        return Promise.reject(error);
    }
  );

  export const login = async (data : customInterface.account)  =>{
    try{
        const response : AxiosResponse = await api.post('/login', data) 
        return response
    }catch(err){
        alert(err)
    }
  }

  export const register = async (data : customInterface.account) =>{
    try {
        return await api.post('/register', data)
    } catch (error) {
        console.error(error)
        return
    }
  }

  export const logout = async () =>{
    try{
        return await api.get('/logout')
    }catch (err){
        console.error(err);
        return
    }
  }