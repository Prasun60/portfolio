import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from "../Robot_playground.js"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import "../styles/model.css"
import { Camera } from 'three'

function Robot() {
  return (
    <div className='model'>
  <Canvas  fov={75} camera={{ position: [0, 0, 9] }} >
      {/* <PerspectiveCamera position={[500,500,600]} /> */}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <directionalLight intensity={1} />
      <ambientLight intensity={1} />
      <Suspense fallback={null}><Model /></Suspense>
    </Canvas>
    </div>
  )
}

export default Robot