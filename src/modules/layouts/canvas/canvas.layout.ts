const drawCanvas = (dimensions: string): any[][] => {
  let [w, h] = dimensions.split(' ');
  const width = Number(w);
  const height = Number(h);
  return Array.from({ length: height + 2 }).map((_, rowIndex: number) => {
    let row: any[] = Array.from({ length: width + 2 });
    if ([0, height + 1].includes(rowIndex)) {
      row = row.map(_ => '-');
    } else {
      row = row.map(_ => ' ');
    }
    row[0] = '|';
    row[width + 1] = '|';
    return row;
  });
}

export { drawCanvas };