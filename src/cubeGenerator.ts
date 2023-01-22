import { Color, CubeType } from './types';

const cornerLength = 8;
const edgeLength = 12;
const centerLength = 6;

/**
 * Generate a cube with random color placement.
 * @returns an array of the 6 faces wich contains another array with the 9 colors of these faces
 */
export function genCube() {
  const totalFaces = new Array(9)
    .fill('white')
    .concat(
      new Array(9).fill('yellow'),
      new Array(9).fill('blue'),
      new Array(9).fill('green'),
      new Array(9).fill('orange'),
      new Array(9).fill('red'),
    )
    .sort(() => 0.5 - Math.random());

  return totalFaces;
}

// real cubes length of a Cube : 26
