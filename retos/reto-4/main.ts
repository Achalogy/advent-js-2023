function decode(message) {
  const regex = /\(([^()]+)\)/g
  const replacer = (_, group) => [...group].reverse().join("")

  return message
    .replace(regex, replacer)
    .replace(regex, replacer)
}

module.exports = decode
