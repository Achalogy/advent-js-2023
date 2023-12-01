function findFirstRepeated(gifts) {
  let obj = {}
  let res = -1;

  gifts.find(g => {
    if (obj[g]) {
      res = g;
      return true;
    }
    obj[g] = true
  })

  return res
}

module.exports = findFirstRepeated
