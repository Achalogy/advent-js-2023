function adjustLights(lights) {
  let start = ""
  let res = 0;

  for (let l of lights) {
    res += +(l == start);
    start = [l, " "][+(l == start)]
  }

  return res
}