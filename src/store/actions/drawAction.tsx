import * as api from '../../api'
import {drawActionInterface} from '../action-interface/drawActionInterface'
import { drawActionType } from '../action-type/drawActionType'
import { Dispatch } from 'react'
import * as customInterface from '../../interface/customInterface'
export const createNewBoard = (boardName: string) =>{
    return async (dispatch : Dispatch<drawActionInterface>) => {
        const responseData = await api.createNewBoard(boardName);
        const boardData : customInterface.board = {
            id : responseData?.data['id'],
            name : responseData?.data['name'],
            data : ''
        }  
        dispatch({
            type: drawActionType.CREATE_NEW_BOARD,
            payload : boardData
        })
        return
    }
}

export const explore = () =>{
    return async (dispatch : Dispatch<drawActionInterface>) =>{
        // const exploreCollection = await 
    }
}
