function manufacture(gifts, materials) {
  const mate = materials.split("")

  return gifts.filter(g => {
    const x = [...new Set([...g, ...mate])]

    return x.length == mate.length
  })
}

module.exports = manufacture