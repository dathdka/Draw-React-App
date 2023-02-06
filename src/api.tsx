import axios from "axios";
import * as customInterface from './interface/customInterface'
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

  export const login = async (data : customInterface.account) =>{
    try{
        return await api.post('/login', data)
    }catch(err){
        console.error(err);
        return
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

  export const logout = async (data : customInterface.token ) =>{
    try{
        return await api.post('/logout', data)
    }catch (err){
        console.error(err);
        return
    }
  }