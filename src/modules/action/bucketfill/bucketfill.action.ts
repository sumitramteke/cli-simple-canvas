import { validateCoordinates } from '@utils/coordinates.validator';
import { cloneDeep } from 'lodash';

/**
 * Reference: https://en.wikipedia.org/wiki/Flood_fill
 * @param layout 2D Matrix image
 * @param X length of Matrix
 * @param Y length each row
 * @param x x - coordinate of axis in matrix
 * @param y y - coordinate of axis in matrix
 * @param prevChar - existing character on given coordinate
 * @param newChar - new character to be fill on given coordinate
 * @returns void
 */
const floodFill = (
  layout: string[][],
  X: number,
  Y: number,
  x: number,
  y: number,
  prevChar: string,
  newChar: string,
) => {
  if (x < 0 || x >= X || y < 0 || y >= Y) return;
  if (layout[y][x] !== prevChar) return;

  // eslint-disable-next-line no-param-reassign
  layout[y][x] = newChar;

  floodFill(layout, X, Y, x + 1, y, prevChar, newChar); // north
  floodFill(layout, X, Y, x - 1, y, prevChar, newChar); // east
  floodFill(layout, X, Y, x, y + 1, prevChar, newChar); // south
  floodFill(layout, X, Y, x, y - 1, prevChar, newChar); // west
};

const drawBucketFill = (layout: string[][], x: number, y: number, newChar = 'o'): any[][] => {
  const orgLayout = cloneDeep(layout);
  try {
    if (!validateCoordinates(layout, [x, y])) {
      throw new Error('Invalid coordinates');
    }
    x -= 1; y -= 1;
    const X = layout[0].length;
    const Y = layout.length;
    // Flood fill algorithm - faster for 2D matrix
    const prevChar = layout[y][x];
    if (prevChar === newChar) { return orgLayout; }
    floodFill(layout, X, Y, x, y, prevChar, newChar);
    return layout;
  } catch(ex) {
    console.error(ex);
    return orgLayout;
  }
};



export { drawBucketFill };
