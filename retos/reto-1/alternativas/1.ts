function findFirstRepeated(gifts) {
  let obj = {}

  for (const i in gifts) {
    const g = gifts[i]
    if (obj[g]) return g
    obj[g] = true
  }

  return -1
}