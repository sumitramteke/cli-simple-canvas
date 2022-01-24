const paintOutline = (outline: any[][]): any[][] => {
  for (const row of outline) {
    console.log(row.join(''));
  }
  return outline;
}

export { paintOutline };