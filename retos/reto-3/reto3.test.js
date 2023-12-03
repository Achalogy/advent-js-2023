const findNaughtyStep = require('./main.ts')

test("Test #01 - Returns a String", () => {
  expect(
    typeof findNaughtyStep('abcd', 'abcde')
  ).toBe("string")
})

test("Test #02 - findNaughtyStep('abcd', 'abcde')", () => {
  expect(findNaughtyStep('abcd', 'abcde')).toStrictEqual("e")
})

test("Test #03 - findNaughtyStep('xxxx', 'xxoxx')", () => {
  expect(findNaughtyStep('xxxx', 'xxoxx')).toStrictEqual("o")
})

test("Test #04 - findNaughtyStep('stepfor', 'stepor')", () => {
  expect(findNaughtyStep('stepfor', 'stepor')).toStrictEqual("f")
})

test("Test #05 - findNaughtyStep('iiiii', 'iiiii')", () => {
  expect(findNaughtyStep('iiiii', 'iiiii')).toStrictEqual("")
})