function manufacture(gifts, materials) {
  return gifts.filter(g => {
    const x = [...new Set(...[g + materials])]

    return x.length == materials.length
  })
}

module.exports = manufacture