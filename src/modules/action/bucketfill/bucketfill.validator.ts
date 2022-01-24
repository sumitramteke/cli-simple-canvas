const validateBucketFill = (input: string) => {
  try {
    const [x, y, c] = input.split(' ');
    if ([x, y].every(dim => !Number.isNaN(Number(dim))) && c !== 'o') {
      return true;
    } 
    throw new Error('Invalid fill coordinates');
  } catch {
    return 'Invalid fill coordinates'
  }
}

export { validateBucketFill };