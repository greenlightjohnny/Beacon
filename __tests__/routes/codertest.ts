import server from "../../src/server"
import request from "supertest"
//const request = require("supertest")
console.log("request", request)

afterEach((done) => {
  server.close()
  done()
})

describe("routes/coder", () => {
  const games = ["World of Tron", "Mech"]
  games.forEach((game: string) => {
    it(`Should allow - ${game}`, async () => {
      const response = await request(server).post("/coder").send({ game })
      console.log("$$$$$$$$", response.body)
      expect(response.status).toEqual(201)
      expect(response.type).toEqual("application/json")
      expect(response.body).toEqual({
        games: [game],
      })
    })
  })
})
