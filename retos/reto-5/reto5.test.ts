const cyberReindeer = require('./main.ts')

test("Test #01 - Returns an Array", () => {
  expect(
    Array.isArray(
      cyberReindeer('S..|...|..', 10)
    )
  ).toBe(true)
})

test("Test #02 - cyberReindeer('S..|...|..', 10)", () => {
  expect(cyberReindeer('S..|...|..', 10)).toStrictEqual([
    "S..|...|..",
    ".S.|...|..",
    "..S|...|..",
    "..S|...|..",
    "..S|...|..",
    "...S...*..",
    "...*S..*..",
    "...*.S.*..",
    "...*..S*..",
    "...*...S.."
  ])
})


test("Test #03 - cyberReindeer('S.|.', 4)", () => {
  expect(cyberReindeer('S.|.', 4)).toStrictEqual([
    "S.|.",
    ".S|.",
    ".S|.",
    ".S|."
  ])
})

test("Test #04 - cyberReindeer('S.|.|.', 7)", () => {
  expect(cyberReindeer('S.|.|.', 7)).toStrictEqual([
    "S.|.|.",
    ".S|.|.",
    ".S|.|.",
    ".S|.|.",
    ".S|.|.",
    "..S.*.",
    "..*S*."
  ])
})

test("Test #05 - cyberReindeer('S.|..', 6)", () => {
  expect(cyberReindeer('S.|..', 6)).toStrictEqual([
    "S.|..",
    ".S|..",
    ".S|..",
    ".S|..",
    ".S|..",
    "..S.."
  ])
})

test("Test #06 - cyberReindeer('S.|.|.|......|.||.........', 8)", () => {
  expect(cyberReindeer('S.|.|.|......|.||.........', 8)).toStrictEqual([
    "S.|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    "..S.*.*......*.**.........",
    "..*S*.*......*.**.........",
    "..*.S.*......*.**........."
  ])
})