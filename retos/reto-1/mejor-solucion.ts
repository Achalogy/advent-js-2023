// Créditos https://github.com/SantiMenendez19/adventjs/blob/main/2023/challenge01/solution.js

function findFirstRepeated(gifts) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i)
  return repeated.length > 0 ? repeated[0] : -1
}