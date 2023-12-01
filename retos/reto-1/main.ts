function findFirstRepeated(gifts) {
  let obj = {}
  let res = -1;

  gifts.find(g => {
    if (!obj[g])
      obj[g] = 1
    else {
      res = g;
      return true
    }
  })

  return res
}

module.exports = findFirstRepeated
