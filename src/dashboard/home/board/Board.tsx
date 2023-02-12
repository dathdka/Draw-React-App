import { fabric } from "fabric"
import { useEffect } from "react"

const Board : React.FC = () =>{
    useEffect(()=>{
        const canvas = new fabric.Canvas('canvas')
        canvas.backgroundColor = 'yellow'
    },[])
    return(
        <canvas id="canvas"/>

    )
}

export default Board