const validateRectangle = (dimension: string) => {
  try {
    const [x1, y1, x2, y2] = dimension.split(' ').map(item => Number(item));
    if ((x1*x2*y1*y2) >
     0 && x2 > x1 && y2 > y1) {
      return true;
    }
    throw new Error('Invalid rectangle coordinates');
  } catch {
    return 'Invalid rectangle coordinates'
  }
}

export { validateRectangle };