import { AddGame } from "../../src/request/AddGame"
import { validate } from "class-validator"

describe("request/AddGame", () => {
  let addGame: AddGame
  const validatorOptions = {}

  beforeAll(() => {
    addGame = new AddGame()
  })

  it(`has expected properties`, async () => {
    addGame.name = "place name here"

    expect(addGame.name).toBeDefined()
  })

  describe(`'name' validation`, () => {
    it("is valid", async () => {
      for (let i = 1; i <= 20; ++i) {
        addGame.name = "x".repeat(i)
        expect(await validate(addGame, validatorOptions)).toHaveLength(0)
      }
    })

    it("must have a length of 1 character greater", async () => {
      addGame.name = ""
      expect(await validate(addGame, validatorOptions)).toHaveLength(1)
    })

    it("must have a length of 20 characters or fewer", async () => {
      addGame.name = "y".repeat(21)
      expect(await validate(addGame, validatorOptions)).toHaveLength(1)
    })

    // it("must be a string", async () => {
    //   addGame.name = 123
    //   expect(await validate(addGame, validatorOptions)).toHaveLength(1)
    // })
  })
})
