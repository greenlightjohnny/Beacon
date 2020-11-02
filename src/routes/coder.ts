import { Context } from "koa"
import Router from "koa-router"

const router = new Router()

router.post(`/coder`, async (ctx: Context) => {
  try {
    ctx.status = 201
    ctx.body = {
      games: [ctx.request.body.game],
    }
  } catch (err) {
    console.log(err)
  }
})

export default router
