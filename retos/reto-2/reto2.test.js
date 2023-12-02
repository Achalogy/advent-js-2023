const manufacture = require('./main.ts')

test("Test #01 - Returns an Array", () => {
  expect(
    Array.isArray(
      manufacture(['tren', 'oso', 'pelota'], 'tronesa')
    )
  ).toBe(true)
})

test("Test #02 - manufacture(['tren', 'oso', 'pelota'], 'tronesa')", () => {
  expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toStrictEqual([
    "tren",
    "oso"
  ])
})


test("Test #03 - manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')", () => {
  expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toStrictEqual([])
})

test("Test #04 - manufacture(['patineta', 'robot', 'libro'], 'nopor')", () => {
  expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toStrictEqual([])
})

test("Test #05 - manufacture([], 'letras')", () => {
  expect(manufacture([], 'letras')).toStrictEqual([])
})