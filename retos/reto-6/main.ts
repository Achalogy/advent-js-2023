function maxDistance(movements) {
  let distance = 0

  let right = movements.match(/>/g)?.length ?? 0
  let left = movements.match(/</g)?.length ?? 0

  distance += right
  distance -= left

  let extra = movements.length - (right + left)

  return Math.abs(distance) + extra
}

module.exports = maxDistance