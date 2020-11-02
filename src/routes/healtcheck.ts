const Router = require("koa-router")
import { Context } from "koa"
const router = new Router()

router.get("/ping", async (ctx: Context) => {
  try {
    ctx.body = {
      status: "success",
      data: "pong",
    }
  } catch (e) {
    console.error(e)
  }
})

export default router
