import { styled } from "@mui/system";
import { connect } from "react-redux";
import { useEffect} from 'react'
import * as customInterface from '../../interface/customInterface'
const HomeContainer = styled('div')({
    backgroundColor : '#123245',
    height : '100vh',
    width : '100%'
})

const Home : React.FC<customInterface.board > = ({id,name,data}) =>{

    useEffect(()=>{
        console.log(id)
        console.log(name)
    },[id])
    

    return (
        <HomeContainer>

        </HomeContainer>
    )
}

const mapStateToProps = (state : customInterface.drawReducer) : customInterface.board =>{
    return {
        id: state.draw.drawData.id,
        name: state.draw.drawData.name,
        data: state.draw.drawData.data
    }
}

export default connect(mapStateToProps)(Home)