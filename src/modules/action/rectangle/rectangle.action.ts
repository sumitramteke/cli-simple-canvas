import { validateCoordinates } from "@utils/coordinates.validator";
import { drawLine } from "@modules/action/line/line.action";
import { cloneDeep } from "lodash";

const drawRectangle = (
  layout: any[][],
  [x1, y1, x2, y2]: number[]) => {
  const orgLayout = cloneDeep(layout);
  try {
    if (!validateCoordinates(layout, [x1, y1, x2, y2])) {
      throw new Error('Invalid coordinates');
    }
    layout = drawLine(layout, [x1, y1, x2, y1]); // top left to top right line
    layout = drawLine(layout, [x2, y1, x2, y2]); // top right to bottom right line
    layout = drawLine(layout, [x1, y1, x1, y2]); // top left to bottom left line
    layout = drawLine(layout, [x1, y2, x2, y2]); // bottom left to bottom right
    return layout;
  } catch(ex) {
    console.error(ex);
    return orgLayout;
  }
  // TODO validator for out of scope coordinates
}

export { drawRectangle };