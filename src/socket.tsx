import io, { Socket } from 'socket.io-client'
import * as customInterface from './interface/customInterface'

var socket : Socket;
export const connectWithServer = (userDetails: customInterface.account) =>{
    socket = io("http://locahos:1234")

    socket.on("connect",()=>{
        console.log(socket.id + 'has connected')
    })

    socket.on('disconnect', () =>{
        console.log(socket.id + 'has disconnect')
    })
}