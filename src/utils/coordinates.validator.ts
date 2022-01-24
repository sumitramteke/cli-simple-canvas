const validateCoordinates = (layout: any[][], [x1, y1, x2, y2]: number []) => {
  let isValid = Array.isArray(layout[y1]) && layout[y1][x1] !== undefined;
  if (isValid && x2 !== undefined && y2 !== undefined) {
    isValid = Array.isArray(layout[y2]) && layout[y2][x2] !== undefined;
  }
  return isValid;
}

export { validateCoordinates };