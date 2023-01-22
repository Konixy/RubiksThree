import React, { useState } from 'react';
import { genCube } from './cubeGenerator';
import { CubeType } from './types';
import { Center } from './Cube';
import { Vector3 } from 'three';

export default function MainCube() {
  const [cube, setCube] = useState<CubeType>(genCube());
  return (
    <>
      <Center color={'blue'} orientation="top" />
      {/* {cube.map((e) => (
        <Center key={Math.random()} color={e} pos={new Vector3(0, 0, 0)} orientation="top" />
      ))} */}
    </>
  );
}
