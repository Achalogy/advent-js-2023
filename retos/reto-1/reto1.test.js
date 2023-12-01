const findFirstRepeated = require('./main.ts')

test('Test #01 - Returns a Number', () => {
  expect(
    typeof findFirstRepeated([2, 1, 3, 5, 3, 2])
  ).toBe("number")
})

test('Test #02 - findFirstRepeated([2, 1, 3, 5, 3, 2])', () => {
  expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toStrictEqual(3)
})

test('Test #03 - findFirstRepeated([2, 2])', () => {
  expect(findFirstRepeated([2, 2])).toStrictEqual(2)
})

test('Test #04 - findFirstRepeated([2, 4, 3, 5, 1])', () => {
  expect(findFirstRepeated([2, 4, 3, 5, 1])).toStrictEqual(-1)
})

test('Test #05 - findFirstRepeated([1])', () => {
  expect(findFirstRepeated([1])).toStrictEqual(-1)
})

test('Test #06 - findFirstRepeated([])', () => {
  expect(findFirstRepeated([])).toStrictEqual(-1)
})

test('Test #07 - findFirstRepeated([10, 20, 30])', () => {
  expect(findFirstRepeated([10, 20, 30])).toStrictEqual(-1)
})

test('Test #08 - findFirstRepeated([5, 1, 2, 3, 2, 5, 1])', () => {
  expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toStrictEqual(2)
})

test('Test #09 - findFirstRepeated([12, 20, 30, 11, 20, 12])', () => {
  expect(findFirstRepeated([12, 20, 30, 11, 20, 12])).toStrictEqual(20)
})

test('Test #10 - findFirstRepeated([0, 1, 3, 5, 0, 2])', () => {
  expect(findFirstRepeated([0, 1, 3, 5, 0, 2])).toStrictEqual(0)
})