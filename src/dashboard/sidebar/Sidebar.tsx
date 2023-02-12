import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Logout } from '../../shared/Logout';
import { styled } from "@mui/system";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AddIcon from '@mui/icons-material/Add';
import { drawAction } from '../../store';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/combineReducers';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
const Container = styled('div')({
    backgroundColor : '#582531',
    height : '100vh',
    width : 80
})

const CustomButton = styled(Button)({
    padding: 20
})

const Sidebar : React.FC = () =>{
    const [showCollection, setShowCollection] = useState(false)
    const dispatch = useDispatch();
    const [logout, setLogout] = useState(false);
    const state = useSelector((state : RootState ) => state.draw)
    const{createNewBoard} = bindActionCreators(drawAction,dispatch)
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) setLogout(true);
    }, []);

    const logoutHandle = async () =>{
        setLogout(true)
    }

    const explore = async () =>{
        
    }

    const myCollection = () => {
        if(!showCollection)setShowCollection(true)
        else setShowCollection(false)
    }

    const createBoard = () =>{
        const boardName = prompt('board name:') || 'test'
        createNewBoard(boardName)
    }

    return(
        <Container>
            {logout && <Logout />}
            <CustomButton onClick={logoutHandle}>
                <LogoutIcon />
            </CustomButton>
            <CustomButton onClick={explore}>
                <ImageSearchIcon />
            </CustomButton>
            <CustomButton onClick={myCollection}>
                <FolderSharedIcon />
            </CustomButton>
            {showCollection && 
            <CustomButton onClick={createBoard}>
                <AddIcon/>
            </CustomButton>
            }
        </Container>
    )
}

export default Sidebar