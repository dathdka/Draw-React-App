import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Logout } from '../../shared/Logout';
import { styled } from "@mui/system";
import { Button } from '@mui/material';
import * as api from '../../api'
import LogoutIcon from '@mui/icons-material/Logout';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
const Container = styled('div')({
    backgroundColor : '#582531',
    height : '100vh',
    width : 80
})

const Sidebar : React.FC = () =>{
    const [logout, setLogout] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) setLogout(true);
    }, []);

    const logoutHandle = async () =>{
        setLogout(true)
    }

    const explore = async () =>{

    }

    const myCollection = async() =>{

    }
    return(
        <Container>
            {logout && <Logout />}
            <Button style={{padding: 20}} onClick={logoutHandle}>
                <LogoutIcon />
            </Button>
            <Button style={{padding: 20}} onClick={explore}>
                <ImageSearchIcon />
            </Button>
            <Button style={{padding: 20}} onClick={myCollection}>
                <FolderSharedIcon />
            </Button>
        </Container>
    )
}

export default Sidebar