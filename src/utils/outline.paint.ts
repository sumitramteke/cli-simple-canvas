const paintOutline = (outline: any[][]): any[][] => {
  const topBottomBorders = Array.from({ length: outline[0].length + 2 })
                                .map(item => '-').join('');
  console.log(topBottomBorders);
  for (const row of outline) {
    console.log(`|${row.join('')}|`);
  }
  console.log(topBottomBorders);
  return outline;
}

export { paintOutline };