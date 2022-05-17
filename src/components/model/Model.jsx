import React, {useEffect} from 'react'
import modelFuncional from './modelFuncional'
import "./modelStyle.css"
import Background from "./src/background.jpeg"

const Model = () => {

    useEffect(()=>{
      modelFuncional()
    },[])

  return (
    <div className="containerModel">
      <img src={Background} alt="fondo" />
        <canvas className='modelWebGl'></canvas>
    </div>
  )
}

export default Model