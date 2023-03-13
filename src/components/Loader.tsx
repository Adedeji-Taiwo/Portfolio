import React from 'react'
import { Html,  useProgress } from '@react-three/drei';


const Loader = () => {
  const {progress} = useProgress();
  
  return (
    <Html>
    <span className='canvas-load'></span>
    <p className='text-sm text-[#f1f1f1] font-extrabold mt-[40px]'>{progress.toFixed(2)}%</p>
  </Html>
  )
}

export default Loader