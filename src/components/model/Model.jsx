import React, {useEffect} from 'react'
import modelFuncional from './modelFuncional'
import "./modelStyle.css"

const Model = () => {

    useEffect(()=>{
      modelFuncional()
    },[])

  return (
    <div className="containerModel">
        <canvas className='modelWebGl'></canvas>
    </div>
  )
}

export default Model