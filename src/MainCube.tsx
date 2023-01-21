import React, { useState } from 'react';
import { genCube } from './cubeGenerator';
import { CubeType } from './types';
import Cube from './Cube';

export default function MainCube() {
  const [cube, setCube] = useState<CubeType>(genCube());
  return (
    <>
      {cube.map((e) => (
        <Cube key={Math.random()} color={e} />
      ))}
    </>
  );
}
