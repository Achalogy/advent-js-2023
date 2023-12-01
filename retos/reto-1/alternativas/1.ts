function findFirstRepeated(gifts) {
  let obj = {}

  for (let i in gifts) {
    let g = gifts[i]
    if (obj[g]) return (g)
    obj[g] = true
  }

  return -1
}

module.exports = findFirstRepeated