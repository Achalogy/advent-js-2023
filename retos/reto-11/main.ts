function getIndexsForPalindrome(word) {
  let res: any = null
  for (let a of Array.from({ length: word.length }).keys()) {
    for (let b of Array.from({ length: word.length }).keys()) {
      let swapped = [...word]
      let aux = word[a]
      swapped[a] = word[b]
      swapped[b] = aux

      let left = swapped.slice(0, Math.floor(word.length / 2)).join("")
      let right = swapped.slice(Math.ceil(word.length / 2)).reverse().join("")

      if (left == right) {
        res = [[], [a, b]][+((a + b) > 0)]
        return res;
      }
    }
  }
  return res
}

console.log(
  getIndexsForPalindrome('abab')
)