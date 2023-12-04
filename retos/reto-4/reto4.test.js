const decode = require('./main.ts')

test("Test #01 - Returns a String", () => {
  expect(
    typeof decode('hola (odnum)')
  ).toBe("string")
})

test("Test #02 - decode('hola (odnum)')", () => {
  expect(decode('hola (odnum)')).toStrictEqual("hola mundo")
})

test("Test #03 - decode('(olleh) (dlrow)!')", () => {
  expect(decode('(olleh) (dlrow)!')).toStrictEqual("hello world!")
})

test("Test #04 - decode('sa(u(cla)atn)s')", () => {
  expect(decode('sa(u(cla)atn)s')).toStrictEqual("santaclaus")
})

test("Test #05 - decode('((nta)(sa))')", () => {
  expect(decode('((nta)(sa))')).toStrictEqual("santa")
})