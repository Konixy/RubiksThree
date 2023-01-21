import { Color, CubeType } from './types';

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
  // const topFace: Color[] = [
  //   totalFaces[0],
  //   totalFaces[1],
  //   totalFaces[2],
  //   totalFaces[3],
  //   totalFaces[4],
  //   totalFaces[5],
  //   totalFaces[6],
  //   totalFaces[7],
  //   totalFaces[8],
  // ];
  // const bottomFace: Color[] = [
  //   totalFaces[9],
  //   totalFaces[10],
  //   totalFaces[11],
  //   totalFaces[12],
  //   totalFaces[13],
  //   totalFaces[14],
  //   totalFaces[15],
  //   totalFaces[16],
  //   totalFaces[17],
  // ];
  // const leftFace: Color[] = [
  //   totalFaces[18],
  //   totalFaces[19],
  //   totalFaces[20],
  //   totalFaces[21],
  //   totalFaces[22],
  //   totalFaces[23],
  //   totalFaces[24],
  //   totalFaces[25],
  //   totalFaces[26],
  // ];
  // const rightFace: Color[] = [
  //   totalFaces[27],
  //   totalFaces[28],
  //   totalFaces[29],
  //   totalFaces[30],
  //   totalFaces[31],
  //   totalFaces[32],
  //   totalFaces[33],
  //   totalFaces[34],
  //   totalFaces[35],
  // ];
  // const frontFace: Color[] = [
  //   totalFaces[36],
  //   totalFaces[37],
  //   totalFaces[38],
  //   totalFaces[39],
  //   totalFaces[40],
  //   totalFaces[41],
  //   totalFaces[42],
  //   totalFaces[43],
  //   totalFaces[44],
  // ];
  // const backFace: Color[] = [
  //   totalFaces[45],
  //   totalFaces[46],
  //   totalFaces[47],
  //   totalFaces[48],
  //   totalFaces[49],
  //   totalFaces[50],
  //   totalFaces[51],
  //   totalFaces[52],
  //   totalFaces[53],
  // ];
  // let cube: CubeType = [topFace, bottomFace, leftFace, rightFace, frontFace, backFace];
  // cube = cube.sort(() => 0.5 - Math.random()).map((e) => e.sort(() => 0.5 - Math.random())) as CubeType;
  // return cube;
}

// real cubes length of a Cube : 26
