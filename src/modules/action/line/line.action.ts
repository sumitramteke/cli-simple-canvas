import { cloneDeep } from "lodash";
import { validateCoordinates } from "@utils/coordinates.validator";

const drawLine = (
  layout: string[][],
  [x1, y1, x2, y2]: number[]) => {
  let start: number;
  let end: number;
  let direction: 'vertical' | 'horizontal';
  const orgLayout = cloneDeep(layout);
  try {
    if (!validateCoordinates(layout, [x1, y1, x2, y2])) {
      throw new Error('Invalid coordinates')
    }
    if (x1 === x2) {
      start = y1;
      end = y2;
      direction = 'vertical';
    } else {
      start = x1;
      end = x2;
      direction = 'horizontal';
    }
    for (let i = start; i <= end; i += 1) {
      if (direction === 'horizontal') {
        // eslint-disable-next-line no-param-reassign
        layout[i][y1] = 'x';
      } else {
        // eslint-disable-next-line no-param-reassign
        layout[x1][i] = 'x';
      }
    }
    return layout;
  } catch {
    return orgLayout;
  }
}

export { drawLine };