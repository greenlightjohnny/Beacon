import { redisStorage } from "../../src/storage/redis"

describe("storage/redis", () => {
  describe("get", () => {
    it("should return empty list", async () => {
      const list_name = "my_test_list"
      expect(await redisStorage.get(list_name)).toEqual([])
    })
  })

  xdescribe("add", () => {})

  xdescribe("remove", () => {})
})
