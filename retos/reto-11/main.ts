function getIndexsForPalindrome(word) {
  let res: any = null
  for (const a of Array.from({ length: word.length }).keys()) {
    for (const b of Array.from({ length: word.length }).keys()) {
      let swapped = [...word]
      let aux = word[a]
      swapped[a] = word[b]
      swapped[b] = aux

      let left = swapped.slice(0, Math.floor(word.length / 2)).join("")
      let right = swapped.slice(Math.ceil(word.length / 2)).reverse().join("")

      res = [
        [
          null
          , [
            []
            , [a, b]
          ][+((a + b) > 0)]
        ][+(left == right)]
        , res
      ][+!!res]
    }
  }
  return res
}