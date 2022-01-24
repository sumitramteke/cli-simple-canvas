const validateCanvas = (val: string) => {
  try {
    const [width, height] = (val).split(' ');
    return Number(width) > 1 && Number(height) > 1;
  } catch (err) {
    return 'Invalid width and height';
  }
}

export { validateCanvas };