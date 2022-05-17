import React, {useEffect} from 'react'
import modelFuncional from './modelFuncional'
import "./modelStyle.css"
/* import Background from "./src/background2.jpg" */
import VideoBackground from "./src/particle1.mp4"

const Model = () => {

    useEffect(()=>{
      modelFuncional()
    },[])

  return (
    <div className="containerModel">
      <video className='particleVideo' src={VideoBackground} autoPlay loop muted ></video>
        <canvas className='modelWebGl'></canvas>
    </div>
  )
}

export default Model