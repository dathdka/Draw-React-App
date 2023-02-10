import io, { Socket } from 'socket.io-client'
import * as customInterface from './interface/customInterface'
import { useNavigate } from 'react-router-dom';
var socket : Socket;
export const connectWithServer = (userDetails: customInterface.account) =>{
    socket = io("http://localhost:1234",{
        auth : {
            token : userDetails.token
        }
    })

    socket.on("connection",()=>{
        console.log(socket.id + 'has connected')
        
    })

    socket.on('already-login',()=>{
        alert(`you are already login in another device`)
        localStorage.removeItem(`id`)
        localStorage.removeItem(`token`)
        localStorage.removeItem(`username`)
        socket.disconnect()
        window.location.href= 'http://localhost:3000/dashboard'
    })

    
    socket.once('disconnect', () =>{
        console.log(socket.id + 'has disconnect')
    })

}

export const disconnect = () =>{
    socket.disconnect()
}