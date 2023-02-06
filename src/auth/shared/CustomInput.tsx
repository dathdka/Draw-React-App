import React from 'react'
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import * as customInterface from '../../interface/customInterface'
const CustomField = styled(TextField)({
    padding : 20
})

const CustomIntput : React.FC<customInterface.authProps> = ( props ) =>{
    return (
        <CustomField placeholder={props.text} onChange={props.handler} variant='standard' />
    )
}

export default CustomIntput
