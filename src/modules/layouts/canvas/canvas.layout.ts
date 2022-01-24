const drawCanvas = (dimensions: string): any[][] => {
  let [w, h] = dimensions.split(' ');
  const width = Number(w);
  const height = Number(h);
  return Array.from({ length: height }).map(_ => {
    let row: any[] = Array.from({ length: width }).map(_ => ' ');
    return row;
  });
}

export { drawCanvas };