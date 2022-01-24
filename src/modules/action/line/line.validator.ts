const validateLine = (dimension: string) => {
  try {
    const [x1, y1, x2, y2] = dimension.split(' ').map(item => Number(item));
    if (x1 > 0 && y1 > 0 && x2 > 0 && y2 > 0 &&
      ((y1 === y2 && x2 > x1) || (x1 === x2 && y2 > y1))) {
      return true;
    }
    throw new Error('Invalid Straight Line coordinates');
  } catch {
    return 'Invalid Straight Line coordinates'
  }
}

export { validateLine };