/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Color, Orientation, Position } from './types';
import * as THREE from 'three';

const hexFromColor = {
  white: '#f0f0f0',
  yellow: 'yellow',
  blue: '#1d349e',
  green: 'green',
  orange: 'orange',
  red: 'red',
};

const basicMaterial = new THREE.MeshBasicMaterial({ color: 'gray' });

export function Center({ color, pos, orientation }: { color: Color; pos?: THREE.Vector3; orientation: Orientation }) {
  const ref = useRef(
    new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), [
      new THREE.MeshBasicMaterial({ color }),
      basicMaterial,
      basicMaterial,
      basicMaterial,
      basicMaterial,
      basicMaterial,
    ]),
  );
  pos && ref.current.position.set(pos.x, pos.y, pos.z);
  if (orientation === 'top' || orientation === 'bottom') {
    ref.current.rotateY(orientation === 'top' ? 90 : -90);
  }
  return <mesh ref={ref} />;
}

export function Edge({ colors, pos }: { colors: [Color, Color]; pos: Position }) {
  return (
    <>
      {colors.join(', ')} ({pos.x + ', ' + pos.y})
    </>
  );
}

export function Corner({ colors, pos }: { colors: [Color, Color, Color]; pos: Position }) {
  return (
    <>
      {colors.join(', ')} ({pos.x + ', ' + pos.y})
    </>
  );
}

export default function Cube({ color }: { color: Color }) {
  const cube = useRef<THREE.Mesh>();
  // return <div className="h-5 w-5" style={{ backgroundColor: hexFromColor[color] }}></div>;
  return (
    <mesh ref={cube as React.Ref<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={hexFromColor[color]} />
    </mesh>
  );
}
