import io, { Socket } from 'socket.io-client'
import * as customInterface from './interface/customInterface'


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

    //TODO get invitation and store into redux store
    socket.on('receive-invitation',(data )=>{
        console.log(data);
    })


    socket.on('notification', (data)=>{
        alert(data)
    })

    //todo receive object draw and push into canvas
    socket.on('receive-draw-data', (data : customInterface.dataDraw) =>{
        
    })

    socket.once('disconnect', () =>{
        console.log(socket.id + 'has disconnect')
    })

}

export const disconnect = () =>{ 
    socket.disconnect()
}

//todo pass data into function
export const sendInvitation = () =>{
    socket.emit('send-invitation', {drawId: '8eb04ca1-c758-421c-912e-bdbd3efaff87', emailReceiveInvitation: 'dat9@gmail.com'})
}

//todo pass data into function
export const acceptInvitation = () =>{
    socket.emit('accept-invitation',{participantsId : 'ddff49df-b18c-43b1-b329-e961cca0de8e'})
}

export const sendDrawData = (data : customInterface.dataDraw) =>{
    socket.emit('draw', data)
}
