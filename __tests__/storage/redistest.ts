import { redisStorage } from "../../src/storage/redis"

describe("storage/redis", () => {
  xdescribe("get", () => {
    const list_name = "my_test_list"
    it("should return empty list", async () => {
      expect(await redisStorage.get(list_name)).toEqual([])
    })

    it("should return all items in a list", async () => {
      expect(await redisStorage.get(list_name)).toEqual([])
    })
  })

  xdescribe("add", () => {
    const list_name = "my_test_list"
    it("should allow adding an element to a list", async () => {
      expect(await redisStorage.add(list_name, "chris")).toBeTruthy()

      expect(await redisStorage.get(list_name)).toEqual(["chris"])
    })
  })

  xdescribe("remove", () => {
    const list_name = "my_test_list"
    it("should allow removing an element from a list", async () => {
      const name1 = "chris"
      const name2 = "paul"
      await redisStorage.add(list_name, name1)
      await redisStorage.add(list_name, name2)

      expect(await redisStorage.get(list_name)).toEqual([name1, name2])

      expect(await redisStorage.remove(list_name, name1)).toBeTruthy()

      expect(await redisStorage.get(list_name)).toEqual([name2])
    })
  })
})
