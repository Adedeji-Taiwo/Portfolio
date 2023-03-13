import React, {Suspense} from 'react';
import {Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader'


    {/*added missing attributes to float starting with key to prevent typescript noise */}

const Ball = ({imgUrl}: {imgUrl:string}) => {
  const [decal] = useTexture([imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} key={undefined} onUpdate={undefined} id={undefined} clear={undefined} add={undefined} copy={undefined} visible={undefined} name={undefined} type={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} attach={undefined} args={undefined} isGroup={undefined} uuid={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} translateOnAxis={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args = {[1, 1]} />
        <meshStandardMaterial  
          color="#fff8eb" 
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  )
}


const BallCanvas = ({icon}: {icon: string}) => {
  return (
    <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
        enableZoom={false}
      />
      <Ball imgUrl={icon}/>
    </Suspense>
    <Preload all />
  </Canvas>
  )
}

export default BallCanvas;