function organizeGifts(gifts) {
  const countGifts = gifts.match(/\d+/g)
  const nameGifts = gifts.match(/[^0-9]/g)

  let response = ""
  let i = 0

  for (let c of countGifts) {
    const g = nameGifts[i]
    let a = ""

    c = +c

    a += `[${g}]`.repeat(c / 50)
    c %= 50

    a += `{${g}}`.repeat(c / 10)
    c %= 10

    a += `(${g.repeat(c)})`.repeat(+!!c)

    response += a
    i++
  }

  return response
}

module.exports = organizeGifts