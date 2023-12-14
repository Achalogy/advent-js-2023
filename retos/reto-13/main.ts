function calculateTime(deliveries) {
  const max = 3600 * 7
  let time = 0

  for (let d of deliveries) {
    const numbers = d.split(":")
    time += (+numbers[0]) * 3600
      + (+numbers[1]) * 60
      + (+numbers[2])
  }

  const signo = (max - time) > 0

  time = Math.abs(max - time)

  let response = ["", "-"][+signo]

  response += (~~(time / 3600) + "").padStart(2, "0") + ":"
  time %= 3600
  response += (~~(time / 60) + "").padStart(2, "0") + ":"
  time %= 60
  response += (time + "").padStart(2, "0")

  return response
}