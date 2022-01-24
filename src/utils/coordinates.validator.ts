const validateCoordinates = (layout: any[][], [x1, y1, x2, y2]: number []) => {
  const X = layout[0].length;
  const Y = layout.length;
  let isValid = x1 > 0 && x1 <= X && y1 > 0 && y1 <= Y;
  if (isValid && x2 !== undefined && y2 !== undefined) {
    isValid = x2 > 0 && x2 <= X && y2 > 0 && y2 <= Y;
  }
  return isValid;
}

export { validateCoordinates };