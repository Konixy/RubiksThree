/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Color } from './types';
import * as THREE from 'three';

const hexFromColor = {
  white: '#f0f0f0',
  yellow: 'yellow',
  blue: '#1d349e',
  green: 'green',
  orange: 'orange',
  red: 'red',
};

export default function Cube({ color }: { color: Color }) {
  const cube = useRef<THREE.Mesh>();
  // return <div className="h-5 w-5" style={{ backgroundColor: hexFromColor[color] }}></div>;
  return (
    <mesh ref={cube as React.Ref<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}
