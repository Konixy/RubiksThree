import React, { useState } from 'react';
import { genCube } from './cubeGenerator';

export type Color = 'white' | 'yellow' | 'blue' | 'green' | 'orange' | 'red';
export type CubeType = [Color[], Color[], Color[], Color[], Color[], Color[]];

const hexFromColor = {
  white: '#f0f0f0',
  yellow: 'yellow',
  blue: '#1d349e',
  green: 'green',
  orange: 'orange',
  red: 'red',
};

function App() {
  return (
    <div className="right-[50%] translate-x-[50%]">
      <Cube />
    </div>
  );
}

function Cube() {
  const [cube, setCube] = useState<CubeType>(genCube());
  return (
    <div className="">
      {cube.map((face) => (
        <div className="grid w-[68px] grid-cols-3 gap-1" key={face.toString()}>
          {face.map((e) => (
            <Square color={e} key={Math.random()} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Square({ color }: { color: Color }) {
  return <div className="h-5 w-5" style={{ backgroundColor: hexFromColor[color] }}></div>;
}

export default App;
