/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import Cube from './MainCube';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stats } from '@react-three/drei';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#252934');
        }}
      >
        <Stats />
        <OrbitControls />
        <Suspense fallback={'loading'}>
          <pointLight intensity={1.0} position={[2, 3, 2]} />
          <Cube />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
