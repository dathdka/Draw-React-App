import axios, { AxiosResponse } from "axios";
import * as customInterface from "./interface/customInterface";
const api = axios.create({
  baseURL: "http://localhost:1234",
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("something went wrong");
    return Promise.reject(error);
  }
);

export const login = async (data: customInterface.account) => {
  try {
    const response: AxiosResponse = await api.post("/login", data);
    return response;
  } catch (err: any) {
    alert(err["response"]["data"]);
  }
};

export const register = async (data: customInterface.account) => {
  try {
    return await api.post("/register", data);
  } catch (err: any) {
    alert(err["response"]["data"]);
  }
};

export const logout = async () => {
  try {
     await api.get("/logout");
     alert('logout success')
    return;
  } catch (err : any) {
    alert(err["response"]["data"]);
  }
};

export const createNewBoard = async(boardName : string) =>{
  try {
    return await api.post('create-new-board',{boardName})
  } catch (err : any) {
    alert(err["response"]["data"]);
  }
}

export const explore = async()=>{
  try {
    return await api.get('explore')
  } catch (err: any) {
    alert(err["response"]["data"]);
  }
}
